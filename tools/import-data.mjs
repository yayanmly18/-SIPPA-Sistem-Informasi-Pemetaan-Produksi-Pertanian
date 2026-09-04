/**
 * import-data.mjs — membaca CSV asli di data-resource/ (MASTER + ML_OUTPUT)
 * dan men-generate JSON yang dipakai dashboard.
 *
 * Pemakaian:  npm run import-data
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "data-resource");
const OUT_DIR = join(ROOT, "src", "data", "generated");

/* ---------- util ---------- */

function parseCsv(text) {
  const first = text.split(/\r?\n/)[0] ?? "";
  const delim = (first.match(/;/g)?.length ?? 0) > (first.match(/,/g)?.length ?? 0) ? ";" : ",";
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false; }
      else field += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === delim) { row.push(field); field = ""; }
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some(c => c.trim() !== "")) rows.push(row);
      row = [];
    } else field += ch;
  }
  row.push(field);
  if (row.some(c => c.trim() !== "")) rows.push(row);
  if (!rows.length) return [];
  const header = rows[0].map(h => h.trim().toLowerCase());
  return rows.slice(1).map(r => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? "").trim()])));
}

const num = (v) => { const n = Number(String(v ?? "").replace(/,/g, "")); return Number.isFinite(n) ? n : null; };
const fmt = (n, d = 2) => n.toLocaleString("id-ID", { maximumFractionDigits: d });

function readCsv(rel) {
  const p = join(SRC, rel);
  try { return parseCsv(readFileSync(p, "utf8")); }
  catch { console.error(`✗ File tidak ditemukan: ${rel}`); process.exit(1); }
}

/** Nama provinsi CSV → nama di GeoJSON peta. */
const GEO_ALIAS = {
  "DKI Jakarta": "Jakarta Raya",
  "DI Yogyakarta": "Yogyakarta",
  "Kepulauan Bangka Belitung": "Bangka-Belitung",
  "Papua Barat": "Irian Jaya Barat",
};

// Warna cluster berdasarkan nomor (bukan ranking, hanya pembeda visual)
const CLUSTER_COLOR = { 0: "#f87171", 1: "#10b981", 2: "#018ABE", 3: "#f59e0b" };

/* ---------- baca sumber ---------- */

const profilRows = readCsv("ML_OUTPUT/Profil_Provinsi.csv");      // long: provinsi × komoditas
const ringkasanRows = readCsv("ML_OUTPUT/Ringkasan_Cluster.csv"); // ringkasan per cluster
const evalRows = readCsv("ML_OUTPUT/Evaluasi_KMeans.csv");        // evaluasi K-Means (k=2..8)
const pcaRows = readCsv("ML_OUTPUT/PCA_Variance.csv");            // PCA

mkdirSync(OUT_DIR, { recursive: true });

/* ---------- agregasi ---------- */

const provTotal = {}, provCluster = {}, komTotal = {}, komYear = {};
const provKom = {};          // provinsi → [{komoditas, produksi, median}]
const clusterKomMedian = {}; // cluster → komoditas → median

for (const r of profilRows) {
  const prov = r.provinsi, kom = r.komoditas, prod = num(r.produksi) ?? 0;
  provTotal[prov] = (provTotal[prov] ?? 0) + prod;
  provCluster[prov] = r.cluster;
  komTotal[kom] = (komTotal[kom] ?? 0) + prod;
  if (r.tahun) komYear[kom] = r.tahun;
  (provKom[prov] ??= []).push({ komoditas: kom, produksi: prod, median: num(r.median_cluster) ?? 0 });
  (clusterKomMedian[r.cluster] ??= {})[kom] = num(r.median_cluster) ?? 0;
}
for (const prov of Object.keys(provKom)) provKom[prov].sort((a, b) => b.produksi - a.produksi);

const KOMODITAS = Object.keys(komTotal).sort((a, b) => komTotal[b] - komTotal[a]);
const PROVINCES = Object.keys(provTotal).sort();
const CLUSTERS = ringkasanRows.map(r => r.cluster).sort();
const CHOSEN_K = CLUSTERS.length;
const NASIONAL_TOTAL = Object.values(provTotal).reduce((a, b) => a + b, 0);

const clusterMeta = ringkasanRows.map(r => {
  const c = r.cluster;
  const provinces = r.provinsi ? r.provinsi.split(",").map(s => s.trim()) : [];
  const totalCluster = provinces.reduce((a, p) => a + (provTotal[p] ?? 0), 0);
  const avgProv = provinces.length ? totalCluster / provinces.length : 0;
  const komMedians = clusterKomMedian[c] ?? {};
  const topKom = Object.entries(komMedians).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";
  return {
    key: c, name: r.cluster_name, karakteristik: r.karakteristik ?? "",
    count: provinces.length, provinces, total: totalCluster, avg: avgProv,
    share: NASIONAL_TOTAL ? (totalCluster / NASIONAL_TOTAL) * 100 : 0,
    topKom, komMedians,
  };
});

const clusterName = Object.fromEntries(clusterMeta.map(c => [c.key, c.name]));
const clusterColor = Object.fromEntries(CLUSTERS.map(c => [c, CLUSTER_COLOR[c] ?? "#97CADB"]));
const maxAvg = Math.max(...clusterMeta.map(c => c.avg), 0.0001);

/* ---------- overview.json ---------- */

const overview = {
  stats: {
    provinces: PROVINCES.length,
    clusters: CLUSTERS.length,
    commodities: KOMODITAS.length,
    period: [...new Set(Object.values(komYear))].sort().join("–"),
  },
  pieData: clusterMeta.map(c => ({
    name: `Cluster ${c.key}`, count: `${c.count} Provinsi`,
    value: c.count, color: CLUSTER_COLOR[c.key] ?? "#97CADB",
  })),
  komoditasTop: KOMODITAS.slice(0, 8).map(k => ({
    name: k, ton: komTotal[k], pct: Math.round(komTotal[k] / komTotal[KOMODITAS[0]] * 100),
  })),
  clusterProd: clusterMeta.map(c => ({
    label: `Cluster ${c.key}`, name: c.name,
    val: Number((c.avg / 1e6).toFixed(2)), pct: Math.round(c.avg / maxAvg * 100),
    color: CLUSTER_COLOR[c.key] ?? "#97CADB",
  })),
  barColors: ["#018ABE", "#97CADB", "#D6E8EE", "rgba(214,232,238,0.6)", "rgba(214,232,238,0.4)", "rgba(214,232,238,0.3)", "rgba(214,232,238,0.2)", "rgba(214,232,238,0.15)"],
};

/* ---------- map.json ---------- */

const PROVINCE_DATA = {};
for (const prov of PROVINCES) {
  const geoName = GEO_ALIAS[prov] ?? prov;
  PROVINCE_DATA[geoName] = {
    cluster: provCluster[prov],
    produksi: `${fmt(provTotal[prov] / 1e6, 2)} Jt Ton`,
  };
}
const LEGEND = clusterMeta.map(c => ({ key: c.key, label: `Cluster ${c.key} · ${c.name}`, color: CLUSTER_COLOR[c.key] ?? "#97CADB" }));
const mapJson = { PROVINCE_DATA, LEGEND, clusterName, clusterColor, clusterCount: CLUSTERS.length };

/* ---------- provinceDetail.json ---------- */

const provinceDetail = {
  PROVINCES,
  PROVINCE_CLUSTER: Object.fromEntries(PROVINCES.map(p => [p, provCluster[p]])),
  PROVINCE_TOTAL: Object.fromEntries(PROVINCES.map(p => [p, Number((provTotal[p] / 1e6).toFixed(3))])),
  KOM_DATA: overview.komoditasTop.map(k => ({ name: k.name, value: Number((k.ton / 1e6).toFixed(3)) })),
  // Perbandingan: rata-rata provinsi cluster sentra (2) vs rata-rata nasional
  CMP_DATA: (() => {
    const sentra = clusterMeta.find(c => c.key === "2");
    const provAvg = sentra ? sentra.avg : NASIONAL_TOTAL / PROVINCES.length;
    const natAvg = NASIONAL_TOTAL / PROVINCES.length;
    return [
      { name: "Total Produksi", province: Number((provAvg / 1e6).toFixed(2)), cluster: Number((natAvg / 1e6).toFixed(2)) },
      { name: "Rasio vs Nasional", province: Number((provAvg / natAvg).toFixed(2)), cluster: 1 },
    ];
  })(),
  // Produksi per komoditas (top 8) untuk tiap provinsi — sumber grafik halaman detail
  PROD_BY_PROVINCE: Object.fromEntries(PROVINCES.map(p => [
    p, provKom[p].slice(0, 8).map(k => ({ m: k.komoditas, v: Number((k.produksi / 1e6).toFixed(3)) })),
  ])),
};

/* ---------- profileCluster.json ---------- */

const RADAR_SUBJECTS = KOMODITAS.slice(0, 5);
const radarKeys = ["A", "B", "C", "D", "E", "F"];
const radarMaxMedian = Math.max(
  ...RADAR_SUBJECTS.map(k => Math.max(...clusterMeta.map(c => c.komMedians[k] ?? 0))),
  0.0001,
);
const RADAR_DATA = RADAR_SUBJECTS.map(subject => {
  const row = { subject };
  clusterMeta.forEach((c, i) => { row[radarKeys[i]] = Math.round((c.komMedians[subject] ?? 0) / radarMaxMedian * 100); });
  return row;
});
const RADAR_SERIES = clusterMeta.map((c, i) => ({
  key: radarKeys[i], name: `Cluster ${c.key}`, color: CLUSTER_COLOR[c.key] ?? "#97CADB",
}));

const profileCluster = {
  CLUSTER_CARDS: clusterMeta.map(c => ({
    key: c.key, title: c.name, desc: c.karakteristik,
    stats: [
      { label: "Jumlah provinsi", val: c.count, dec: 0, unit: " Provinsi" },
      { label: "Produksi rata-rata/provinsi", val: Number((c.avg / 1e6).toFixed(2)), dec: 2, unit: " Jt Ton" },
      { label: "Kontribusi nasional", val: Number(c.share.toFixed(1)), dec: 1, unit: " %" },
    ],
  })),
  RADAR_DATA,
  RADAR_SERIES,
  DOM_TABLE: clusterMeta.map(c => ({ key: c.key, komoditas: c.topKom })),
  TABLE_STATS: clusterMeta.map(c => ({
    key: c.key, provinsi: c.count,
    produksi: fmt(c.total / 1e6, 2), luas: "-", prod: "-", kom: c.topKom,
  })),
  PROVINCE_TABS: clusterMeta.map(c => ({
    key: c.key, label: `CLUSTER ${c.key}`, title: c.name,
    sub: c.karakteristik.slice(0, 60) + (c.karakteristik.length > 60 ? "…" : ""),
    count: c.count, pct: Math.round(c.share), provinces: c.provinces,
  })),
};

/* ---------- modelEval.json ---------- */

const evRows = evalRows
  .map(r => ({ k: num(r.k), inertia: num(r.inertia), sil: num(r.silhouette_score), dbi: num(r.davies_bouldin_index) }))
  .filter(r => r.k !== null)
  .sort((a, b) => a.k - b.k);

const chosen = evRows.find(r => r.k === CHOSEN_K) ?? evRows[evRows.length - 1];
const ELBOW = evRows.map(r => ({ k: r.k, v: r.inertia }));
const SIL = evRows.map(r => ({ k: r.k, v: r.sil }));
const DBI = evRows.map(r => ({ k: r.k, v: r.dbi }));

const modelEval = {
  BEST_K: CHOSEN_K,
  ELBOW, SIL, DBI,
  TABLE: evRows.map(r => ({
    k: r.k === CHOSEN_K ? `${r.k} Terpilih` : String(r.k),
    sil: fmt(r.sil, 3), dbi: fmt(r.dbi, 3), inertia: fmt(r.inertia, 0),
    sel: r.k === CHOSEN_K,
  })),
  TOP: [
    { label: "K Terpilih", value: CHOSEN_K, dec: 0, unit: "Cluster", color: "#10b981" },
    { label: "Silhouette Score", value: chosen.sil, dec: 3, unit: `Pada K=${CHOSEN_K}`, color: "#018ABE", pct: Math.max(0, Math.round(chosen.sil * 100)) },
    { label: "Davies-Bouldin Index", value: chosen.dbi, dec: 3, unit: `Pada K=${CHOSEN_K}`, color: "#f59e0b", pct: Math.min(100, Math.round(chosen.dbi * 100)) },
    { label: "Inertia", value: chosen.inertia, dec: 0, unit: `Pada K=${CHOSEN_K}`, color: "#a78bfa", pct: Math.round(chosen.inertia / evRows[0].inertia * 100) },
  ],
  METRIC_CHARTS: [
    { title: "Elbow Curve (Inertia)", data: ELBOW, color: "#10b981", label: "Inertia" },
    { title: "Silhouette Score per K", data: SIL, color: "#018ABE", label: "Score" },
    { title: "Davies-Bouldin Index per K", data: DBI, color: "#f59e0b", label: "DBI" },
  ],
  PCA: pcaRows.map(r => ({ component: num(r.component), explained: num(r.explained_variance), cumulative: num(r.cumulative_variance) })),
};

/* ---------- clusters.json ---------- */

const clustersJson = { count: CLUSTERS.length, colors: clusterColor, names: clusterName };

/* ---------- tulis output ---------- */

const write = (name, data) => {
  writeFileSync(join(OUT_DIR, name), JSON.stringify(data, null, 2) + "\n");
  console.log(`✓ src/data/generated/${name}`);
};

write("overview.json", overview);
write("map.json", mapJson);
write("provinceDetail.json", provinceDetail);
write("profileCluster.json", profileCluster);
write("modelEval.json", modelEval);
write("clusters.json", clustersJson);

console.log(`\nSelesai! ${PROVINCES.length} provinsi, ${KOMODITAS.length} komoditas, ${CLUSTERS.length} cluster (K=${CHOSEN_K}).`);
