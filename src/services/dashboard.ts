/**
 * Lapisan transformasi data: API → bentuk yang dibutuhkan komponen UI.
 *
 * Semua agregasi (jumlah provinsi, rata-rata produksi per cluster, dsb) dihitung
 * dari response API — bukan dari dummy data. Palet warna cluster tetap konstanta
 * UI (backend tidak menyediakan warna).
 */
import clusterMeta from "../data/generated/clusters.json";
import { getClusters, getClusterDetail, getClusterSummary } from "./clusters";
import { getCommodities } from "./commodities";
import { getModelEvaluation } from "./modelEvaluation";
import {
  getAllProvinceDetails,
  getProvinceComparison,
  getProvinceDetail,
  getProvinceMapData,
  getProvinces,
} from "./provinces";
import type { Commodity, Numeric } from "../types/api";

/* ------------------------------------------------------------------ */
/* Helper                                                             */
/* ------------------------------------------------------------------ */

const CLUSTER_COLORS: Record<string, string> = clusterMeta.colors;
/** Warna cluster (konstanta UI). */
export const clusterColor = (n: number | string): string => CLUSTER_COLORS[String(n)] ?? "#97CADB";

/** Konversi nilai DECIMAL (string) dari backend menjadi number yang aman. */
export const toNumber = (v: Numeric | undefined, fallback = 0): number => {
  if (v === null || v === undefined || v === "") return fallback;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
};

/** Format angka gaya Indonesia (contoh: 1052.06 → "1.052"). */
const idFmt = (v: number, d = 0): string =>
  v.toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d });

/** Ton → Juta Ton. */
const toJutaTon = (tons: number): number => tons / 1e6;

/* ------------------------------------------------------------------ */
/* Tahun acuan                                                       */
/* ------------------------------------------------------------------ */

/** Tahun acuan komoditas yang tersedia di backend (mis. [2024, 2025]). */
function commodityYears(commodities: Commodity[]): number[] {
  return Array.from(
    new Set(
      commodities.map((c) => c.reference_year).filter((y): y is number => typeof y === "number"),
    ),
  ).sort((a, b) => a - b);
}

/** Rentang tahun untuk label periode, mis. "2024–2025". */
function periodLabel(commodities: Commodity[]): string {
  const years = commodityYears(commodities);
  if (years.length >= 2) return `${years[0]}–${years[years.length - 1]}`;
  if (years.length === 1) return String(years[0]);
  return "Data terkini";
}

/* ------------------------------------------------------------------ */
/* Agregasi produksi nasional per tahun                               */
/* ------------------------------------------------------------------ */

export interface TopCommodity {
  name: string;
  ton: number;
}

/**
 * Menjumlahkan produksi dari SELURUH provinsi (rincian provinsi × komoditas).
 * Backend tidak menyediakan agregat nasional, jadi harus dihitung di frontend.
 * Semua request sudah di-cache → dipakai ulang oleh halaman Detail Provinsi.
 */
async function aggregateProduction(): Promise<{
  byCommodity: TopCommodity[];
  clusterByNumber: Map<number, number>;
}> {
  const details = await getAllProvinceDetails();

  const perCommodity = new Map<string, number>();
  const perCluster = new Map<number, number>();

  for (const d of details) {
    const clusterNumber = d.cluster?.cluster_number;
    for (const row of d.commodity_productions ?? []) {
      const ton = toNumber(row.produksi);
      if (ton <= 0) continue;
      const name = row.commodity?.display_name ?? row.commodity?.slug ?? "?";

      perCommodity.set(name, (perCommodity.get(name) ?? 0) + ton);
      if (typeof clusterNumber === "number") {
        perCluster.set(clusterNumber, (perCluster.get(clusterNumber) ?? 0) + ton);
      }
    }
  }

  return {
    byCommodity: [...perCommodity.entries()]
      .map(([name, ton]) => ({ name, ton }))
      .sort((a, b) => b.ton - a.ton),
    clusterByNumber: perCluster,
  };
}

/* ------------------------------------------------------------------ */
/* Overview                                                           */
/* ------------------------------------------------------------------ */

export interface OverviewView {
  stats: { provinces: number; clusters: number; commodities: number; period: string };
  pieData: { name: string; value: number; count: string; pct: number; color: string }[];
  clusterProd: { label: string; name: string; val: number; pct: number; color: string }[];
  nationalTotal: number; // Juta Ton — seluruh data
  avgPerProvince: number; // Juta Ton — seluruh data
  /** Komoditas dengan produksi terbesar (dihitung dari API). */
  topCommodities: TopCommodity[];
}

export async function getOverviewData(): Promise<OverviewView> {
  const [summary, provinces, commodities, agg] = await Promise.all([
    getClusterSummary(),
    getProvinces(),
    getCommodities(),
    aggregateProduction(),
  ]);

  const ordered = [...summary].sort((a, b) => a.cluster_number - b.cluster_number);

  // Total produksi nasional (ton) — mencakup seluruh rentang tahun yang tersedia.
  let nationalTon = 0;
  for (const p of provinces) nationalTon += toNumber(p.total_production);
  const nationalJt = toJutaTon(nationalTon);

  const clusterAvg = ordered.map((c) => {
    const count = c.jumlah_provinsi || 0;
    const total = agg.clusterByNumber.get(c.cluster_number) ?? 0;
    return { c, avgJt: count > 0 ? toJutaTon(total) / count : 0 };
  });
  const maxAvg = Math.max(1, ...clusterAvg.map((x) => x.avgJt));

  const totalProv = provinces.length || 1;
  const pieData = ordered.map((c) => ({
    name: `Cluster ${c.cluster_number}`,
    value: c.jumlah_provinsi,
    count: `${c.jumlah_provinsi} Provinsi`,
    pct: Math.round((c.jumlah_provinsi / totalProv) * 100),
    color: clusterColor(c.cluster_number),
  }));

  const clusterProd = clusterAvg.map(({ c, avgJt }) => ({
    label: `Cluster ${c.cluster_number}`,
    name: c.name,
    val: Number(avgJt.toFixed(2)),
    pct: Math.round((avgJt / maxAvg) * 100),
    color: clusterColor(c.cluster_number),
  }));

  return {
    stats: {
      provinces: provinces.length,
      clusters: ordered.length,
      commodities: commodities.length,
      period: periodLabel(commodities),
    },
    pieData,
    clusterProd,
    nationalTotal: nationalJt,
    avgPerProvince: provinces.length ? nationalJt / provinces.length : 0,
    topCommodities: agg.byCommodity.slice(0, 8),
  };
}

/* ------------------------------------------------------------------ */
/* Peta sebaran kluster                                               */
/* ------------------------------------------------------------------ */

export interface MapProvinceRow {
  cluster: string;
  produksi?: string;
  /** Diisi bila backend punya data luas panen untuk provinsi ini. */
  luas?: string;
  /** Diisi bila backend punya data produktivitas untuk provinsi ini. */
  produktivitas?: string;
}

export interface MapView {
  provinceData: Record<string, MapProvinceRow>;
  legend: { key: string; label: string; color: string }[];
  clusterName: Record<string, string>;
  clusterColor: Record<string, string>;
  clusterCount: number;
}

export async function getMapViewData(): Promise<MapView> {
  const [summary, mapData, details] = await Promise.all([
    getClusterSummary(),
    getProvinceMapData(),
    getAllProvinceDetails(),
  ]);

  const ordered = [...summary].sort((a, b) => a.cluster_number - b.cluster_number);

  // Luas panen & produktivitas tidak tersedia di /provinces/map-data,
  // jadi diambil dari detail provinsi (hanya baris yang punya luas_panen).
  const luasByName = new Map<string, { luasHa: number; ton: number }>();
  for (const d of details) {
    const rows = d.commodity_productions.filter((r) => toNumber(r.luas_panen) > 0);
    if (!rows.length) continue;
    luasByName.set(d.name, {
      luasHa: rows.reduce((a, r) => a + toNumber(r.luas_panen), 0),
      ton: rows.reduce((a, r) => a + toNumber(r.produksi), 0),
    });
  }

  // Kunci pakai geo_alias bila ada, supaya cocok dengan nama provinsi di GeoJSON peta.
  const provinceData: Record<string, MapProvinceRow> = {};
  for (const p of mapData) {
    const key = p.geo_alias ?? p.name;
    const row: MapProvinceRow = {
      cluster: String(p.cluster_number),
      produksi: `${idFmt(toJutaTon(toNumber(p.total_production)), 2)} Jt Ton`,
    };
    const luas = luasByName.get(p.name);
    if (luas && luas.luasHa > 0) {
      row.luas = `${idFmt(toJutaTon(luas.luasHa), 2)} Jt Ha`;
      row.produktivitas = `${idFmt(luas.ton / luas.luasHa, 1)} Ton/Ha`;
    }
    provinceData[key] = row;
  }

  const legend = ordered.map((c) => ({
    key: String(c.cluster_number),
    label: `Cluster ${c.cluster_number}`,
    color: clusterColor(c.cluster_number),
  }));

  return {
    provinceData,
    legend,
    clusterName: Object.fromEntries(ordered.map((c) => [String(c.cluster_number), c.name])),
    clusterColor: Object.fromEntries(
      ordered.map((c) => [String(c.cluster_number), clusterColor(c.cluster_number)]),
    ),
    clusterCount: ordered.length,
  };
}

/* ------------------------------------------------------------------ */
/* Profil kluster                                                     */
/* ------------------------------------------------------------------ */

export interface ProfileClusterView {
  clusterCards: {
    key: string;
    title: string;
    desc: string;
    stats: { label: string; val: number; dec: number; unit: string }[];
  }[];
  /** Baris per komoditas; kolom = median produksi (Juta Ton) tiap cluster. */
  comparisonData: Record<string, number | string>[];
  domTable: { key: string; komoditas: string }[];
  tableStats: { key: string; provinsi: number; produksi: string; kom: string }[];
  provinceTabs: {
    key: string;
    label: string;
    title: string;
    sub: string;
    count: number;
    pct: number;
    provinces: string[];
  }[];
}

export async function getProfileClusterData(): Promise<ProfileClusterView> {
  const [clusters, provinces] = await Promise.all([getClusters(), getProvinces()]);
  const details = await Promise.all(clusters.map((c) => getClusterDetail(c.id)));

  const ordered = [...clusters].sort((a, b) => a.cluster_number - b.cluster_number);

  const totalByCluster = new Map<number, number>();
  const provincesByCluster = new Map<number, string[]>();
  let nationalTotal = 0;
  for (const p of provinces) {
    const tons = toNumber(p.total_production);
    nationalTotal += tons;
    const n = p.cluster?.cluster_number;
    if (typeof n !== "number") continue;
    totalByCluster.set(n, (totalByCluster.get(n) ?? 0) + tons);
    const list = provincesByCluster.get(n) ?? [];
    list.push(p.name);
    provincesByCluster.set(n, list);
  }

  const clusterCards: ProfileClusterView["clusterCards"] = [];
  const domTable: ProfileClusterView["domTable"] = [];
  const tableStats: ProfileClusterView["tableStats"] = [];
  const provinceTabs: ProfileClusterView["provinceTabs"] = [];

  // Data perbandingan: median produksi tiap komoditas per cluster (dari /clusters/{id}).
  const medianByCluster = new Map<string, Map<string, number>>();
  const commoditySet = new Set<string>();
  for (const d of details) {
    const m = new Map<string, number>();
    for (const cp of d.commodity_profiles ?? []) {
      const name = cp.commodity?.display_name ?? cp.commodity?.slug ?? "?";
      m.set(name, toNumber(cp.median_produksi));
      commoditySet.add(name);
    }
    medianByCluster.set(String(d.cluster_number), m);
  }

  for (const c of ordered) {
    const key = String(c.cluster_number);
    const count = provincesByCluster.get(c.cluster_number)?.length ?? c.jumlah_provinsi;
    const total = totalByCluster.get(c.cluster_number) ?? 0;
    const avgJt = count > 0 ? toJutaTon(total) / count : 0;
    const share = nationalTotal > 0 ? (total / nationalTotal) * 100 : 0;

    const provList = [...(provincesByCluster.get(c.cluster_number) ?? [])].sort((a, b) =>
      a.localeCompare(b, "id"),
    );

    // Komoditas dominan = median produksi TERTINGGI.
    // Bukan profiles[0]: backend mengurutkan menurut mean_z_score, yaitu komoditas
    // yang paling "khas" bagi cluster — sering bernilai ~0 ton (mis. Apel utk Cluster 0),
    // sehingga menyesatkan bila ditampilkan sebagai "komoditas dominan".
    const medianMap = medianByCluster.get(key);
    const topKom = medianMap
      ? ([...medianMap.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-")
      : "-";

    clusterCards.push({
      key,
      title: c.name,
      desc: c.karakteristik,
      stats: [
        { label: "Jumlah provinsi", val: count, dec: 0, unit: " Provinsi" },
        { label: "Produksi rata-rata/provinsi", val: Number(avgJt.toFixed(2)), dec: 2, unit: " Jt Ton" },
        { label: "Kontribusi nasional", val: Number(share.toFixed(1)), dec: 1, unit: " %" },
      ],
    });
    domTable.push({ key, komoditas: topKom });
    tableStats.push({
      key,
      provinsi: count,
      produksi: idFmt(toJutaTon(total), 2),
      kom: topKom,
    });
    provinceTabs.push({
      key,
      label: `CLUSTER ${c.cluster_number}`,
      title: c.name,
      sub: c.karakteristik.length > 60 ? `${c.karakteristik.slice(0, 60)}…` : c.karakteristik,
      count,
      pct: Math.round(share),
      provinces: provList,
    });
  }

  // Ambil 6 komoditas teratas (median tertinggi di seluruh cluster) sebagai sumbu perbandingan.
  const subjects = [...commoditySet]
    .map((name) => ({ name, max: Math.max(0, ...[...medianByCluster.values()].map((m) => m.get(name) ?? 0)) }))
    .sort((a, b) => b.max - a.max)
    .slice(0, 6);

  // Baris = komoditas, kolom = median produksi (Juta Ton) untuk tiap cluster.
  // Nilai asli (bukan indeks 0-100) supaya mudah dibandingkan.
  const comparisonData = subjects.map(({ name }) => {
    const row: Record<string, number | string> = { name };
    ordered.forEach((c) => {
      const m = medianByCluster.get(String(c.cluster_number));
      row[String(c.cluster_number)] = toJutaTon(m?.get(name) ?? 0);
    });
    return row;
  });

  return { clusterCards, comparisonData, domTable, tableStats, provinceTabs };
}

/* ------------------------------------------------------------------ */
/* Detail provinsi                                                    */
/* ------------------------------------------------------------------ */

export interface ProvinceExplorerView {
  provinces: string[];
  // total dalam Juta Ton; rank = peringkat produksi nasional (1 = tertinggi)
  byName: Record<string, { id: string; cluster: string; clusterName: string; total: number; rank: number }>;
  provinceTotal: Record<string, number>;
}

export async function getProvinceExplorerData(): Promise<ProvinceExplorerView> {
  const [list, summary] = await Promise.all([getProvinces(), getClusterSummary()]);
  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name, "id"));

  const clusterNameByNumber = new Map(summary.map((c) => [String(c.cluster_number), c.name]));

  // Peringkat nasional berdasarkan total produksi (1 = produksi tertinggi).
  const rankByName = new Map<string, number>();
  [...list]
    .map((p) => ({ name: p.name, total: toNumber(p.total_production) }))
    .sort((a, b) => b.total - a.total)
    .forEach((r, i) => rankByName.set(r.name, i + 1));

  const byName: ProvinceExplorerView["byName"] = {};
  const provinceTotal: Record<string, number> = {};
  for (const p of sorted) {
    const total = toJutaTon(toNumber(p.total_production));
    const cluster = String(p.cluster?.cluster_number ?? "");
    byName[p.name] = { id: p.id, cluster, clusterName: clusterNameByNumber.get(cluster) ?? "", total, rank: rankByName.get(p.name) ?? 0 };
    provinceTotal[p.name] = total;
  }

  return { provinces: sorted.map((p) => p.name), byName, provinceTotal };
}

export interface ProvinceDetailView {
  komData: { name: string; value: number }[]; // Juta Ton
  cmpData: { name: string; province: number; cluster: number }[]; // Juta Ton
  /** Deret produksi per tahun (Juta Ton), dari reference_year tiap komoditas. */
  lineByYear: { m: string; v: number }[];
  /** Jumlah komoditas yang benar-benar diproduksi provinsi ini (produksi > 0). */
  commodityCount: number;
  /** Rata-rata produksi per komoditas yang diproduksi (Juta Ton). */
  avgPerCommodityJt: number | null;
  /** Total luas panen (Juta Ha). null bila provinsi tidak punya data luas panen. */
  luasPanenJtHa: number | null;
  /** Produktivitas rata-rata tertimbang (Ton/Ha). null bila tidak ada data luas panen. */
  produktivitas: number | null;
}

export async function getProvinceDetailView(id: string): Promise<ProvinceDetailView> {
  const [detail, comparison] = await Promise.all([getProvinceDetail(id), getProvinceComparison(id)]);

  // Baris komoditas yang benar-benar diproduksi (produksi > 0).
  const producedRows = detail.commodity_productions.filter((r) => toNumber(r.produksi) > 0);
  const producedTon = producedRows.reduce((acc, r) => acc + toNumber(r.produksi), 0);

  const komData = [...producedRows]
    .sort((a, b) => toNumber(b.produksi) - toNumber(a.produksi))
    .slice(0, 8)
    .map((r) => ({
      name: r.commodity?.display_name ?? r.commodity?.slug ?? "?",
      value: Number(toJutaTon(toNumber(r.produksi)).toFixed(3)),
    }));

  const cmpData = [...comparison]
    .sort(
      (a, b) =>
        Math.abs(toNumber(b.selisih_dengan_median_cluster)) -
        Math.abs(toNumber(a.selisih_dengan_median_cluster)),
    )
    .slice(0, 8)
    .map((r) => ({
      name: r.commodity?.display_name ?? r.commodity?.slug ?? "?",
      province: Number(toJutaTon(toNumber(r.produksi)).toFixed(3)),
      cluster: Number(toJutaTon(toNumber(r.median_cluster)).toFixed(3)),
    }));

  // Luas panen & produktivitas hanya bisa dihitung dari baris yang memiliki luas_panen.
  const rowsWithLuas = detail.commodity_productions.filter((r) => toNumber(r.luas_panen) > 0);
  const totalLuasHa = rowsWithLuas.reduce((acc, r) => acc + toNumber(r.luas_panen), 0);
  const totalProduksiLuasTon = rowsWithLuas.reduce((acc, r) => acc + toNumber(r.produksi), 0);

  // Deret produksi per tahun — tahun acuan diambil dari masing-masing komoditas.
  const byYear = new Map<number, number>();
  for (const row of detail.commodity_productions ?? []) {
    const y = row.commodity?.reference_year;
    const ton = toNumber(row.produksi);
    if (typeof y !== "number" || !(ton > 0)) continue;
    byYear.set(y, (byYear.get(y) ?? 0) + ton);
  }
  const lineByYear = [...byYear.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([y, ton]) => ({ m: String(y), v: Number(toJutaTon(ton).toFixed(3)) }));

  return {
    komData,
    cmpData,
    lineByYear,
    commodityCount: producedRows.length,
    avgPerCommodityJt: producedRows.length > 0 ? toJutaTon(producedTon) / producedRows.length : null,
    luasPanenJtHa: totalLuasHa > 0 ? toJutaTon(totalLuasHa) : null,
    produktivitas: totalLuasHa > 0 ? totalProduksiLuasTon / totalLuasHa : null,
  };
}

/* ------------------------------------------------------------------ */
/* Evaluasi model                                                     */
/* ------------------------------------------------------------------ */

export interface ModelEvalView {
  bestK: number;
  note: string;
  table: { k: string; sil: string; dbi: string; inertia: string; sel: boolean }[];
  top: { label: string; value: number; dec: number; unit: string; color: string; pct?: number }[];
  metricCharts: { title: string; data: { k: number; v: number }[]; color: string; label: string }[];
  pca: { component: number; explained: number; cumulative: number }[];
}

export async function getModelEvalData(): Promise<ModelEvalView> {
  const me = await getModelEvaluation();
  const bestK = me.kmeans.chosen_k;

  const rows = [...me.kmeans.evaluations]
    .sort((a, b) => a.k - b.k)
    .map((e) => ({
      k: e.k,
      inertia: toNumber(e.inertia),
      sil: toNumber(e.silhouette_score),
      dbi: toNumber(e.davies_bouldin_index),
    }));

  const chosen =
    rows.find((r) => r.k === bestK) ?? rows[rows.length - 1] ?? { k: bestK, inertia: 0, sil: 0, dbi: 0 };
  const baseInertia = rows[0]?.inertia ?? 1;

  const table = rows.map((r) => ({
    k: r.k === bestK ? `${r.k} Terpilih` : String(r.k),
    sil: idFmt(r.sil, 3),
    dbi: idFmt(r.dbi, 3),
    inertia: idFmt(r.inertia, 0),
    sel: r.k === bestK,
  }));

  const top: ModelEvalView["top"] = [
    { label: "K Terpilih", value: bestK, dec: 0, unit: "Cluster", color: "#10b981" },
    {
      label: "Silhouette Score",
      value: chosen.sil,
      dec: 3,
      unit: `Pada K=${bestK}`,
      color: "#018ABE",
      pct: Math.max(0, Math.round(chosen.sil * 100)),
    },
    {
      label: "Davies-Bouldin Index",
      value: chosen.dbi,
      dec: 3,
      unit: `Pada K=${bestK}`,
      color: "#f59e0b",
      pct: Math.min(100, Math.round(chosen.dbi * 100)),
    },
    {
      label: "Inertia",
      value: chosen.inertia,
      dec: 0,
      unit: `Pada K=${bestK}`,
      color: "#a78bfa",
      pct: baseInertia > 0 ? Math.round((chosen.inertia / baseInertia) * 100) : 100,
    },
  ];

  const metricCharts: ModelEvalView["metricCharts"] = [
    { title: "Elbow Curve (Inertia)", data: rows.map((r) => ({ k: r.k, v: r.inertia })), color: "#10b981", label: "Inertia" },
    { title: "Silhouette Score per K", data: rows.map((r) => ({ k: r.k, v: r.sil })), color: "#018ABE", label: "Score" },
    { title: "Davies-Bouldin Index per K", data: rows.map((r) => ({ k: r.k, v: r.dbi })), color: "#f59e0b", label: "DBI" },
  ];

  const pca = [...me.pca.variances]
    .sort((a, b) => a.component - b.component)
    .map((v) => ({
      component: v.component,
      explained: toNumber(v.explained_variance),
      cumulative: toNumber(v.cumulative_variance),
    }));

  return { bestK, note: me.kmeans.chosen_k_note, table, top, metricCharts, pca };
}



