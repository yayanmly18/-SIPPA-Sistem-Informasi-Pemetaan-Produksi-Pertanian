import { useState } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardTitle, DarkTooltip, CLUSTER } from "../components/ui";
import AnimatedNumber from "../components/AnimatedNumber";

type Tab = "ringkasan" | "perbandingan" | "provinsi";

const HIGH_P = ["DKI Jakarta","Jawa Barat","Jawa Timur","Jawa Tengah","Banten","Sumatera Selatan","Kalimantan Barat","Sulawesi Tengah","NTB","Sulawesi Utara","Papua","Maluku Utara"];
const MED_P  = ["Sumatera Utara","Sulawesi Selatan","Bali","Kalimantan Timur","Riau","Lampung","Kalimantan Selatan","Aceh","Kepulauan Riau","Jambi","Bengkulu","Sumatera Barat","NTB","Bangka Belitung","Kalimantan Tengah","Sulawesi Tenggara"];
const LOW_P  = ["Papua","Maluku","NTT","Sulawesi Barat","Gorontalo","Kalimantan Utara","Papua Barat","Sulawesi Tengah","Kepulauan Riau","Maluku Utara"];

export default function ProfileClusterPage() {
  const [tab, setTab] = useState<Tab>("ringkasan");

  return (
    <div className="p-4 md:p-7 flex flex-col gap-5">
      <div style={{ display: "flex", alignItems: "center", gap: 0, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        {(["ringkasan","perbandingan","provinsi"] as Tab[]).map((t) => {
          const labels: Record<Tab,string> = { ringkasan:"Ringkasan", perbandingan:"Perbandingan", provinsi:"Anggota" };
          const active = tab === t;
          return (
            <button key={t} onClick={() => setTab(t)}
              style={{
                padding: "10px 20px", fontSize: 13, position: "relative",
                fontWeight: active ? 600 : 400, fontFamily: "Plus Jakarta Sans, sans-serif",
                color: active ? "#ffffff" : "rgba(151,202,219,0.78)",
                background: "transparent", border: "none", cursor: "pointer",
                transition: "color 150ms ease",
                borderBottom: active ? "2px solid #018ABE" : "2px solid transparent",
                marginBottom: -1,
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "#97CADB"; }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(151,202,219,0.78)"; }}
            >
              {labels[t]}
            </button>
          );
        })}
      </div>

      {tab === "ringkasan"    && <RingkasanTab />}
      {tab === "perbandingan" && <PerbandinganTab />}
      {tab === "provinsi"     && <ProvinsiTab />}
    </div>
  );
}

function RingkasanTab() {
  const clusters: Array<{
    key: "1"|"2"|"3";
    title: string;
    desc: string;
    stats: { label: string; val: number; dec: number; unit: string }[];
  }> = [
    {
      key: "1",
      title: "Sentra Produksi Tanaman Pangan Utama",
      desc: "12 Provinsi dengan produksi, luas panen, dan produktivitas tinggi yang menjadi pusat utama pertanian tanaman pangan nasional.",
      stats: [{ label: "Produksi rata-rata", val: 5.3, dec: 1, unit: " Jt Ton" }, { label: "Luas Panen", val: 1.17, dec: 2, unit: " Jt Ha" }, { label: "Produktivitas", val: 3.4, dec: 2, unit: " Ton/Ha" }],
    },
    {
      key: "2",
      title: "Wilayah dengan Potensi Produksi Berkembang",
      desc: "16 Provinsi dengan tingkat produksi dan produktivitas sedang yang memiliki potensi nyata untuk meningkatkan hasil pertanian.",
      stats: [{ label: "Produksi rata-rata", val: 1.4, dec: 1, unit: " Jt Ton" }, { label: "Luas Panen", val: 0.41, dec: 2, unit: " Jt Ha" }, { label: "Produktivitas", val: 2.54, dec: 2, unit: " Ton/Ha" }],
    },
    {
      key: "3",
      title: "Wilayah dengan Produksi Pertanian Terbatas",
      desc: "10 Provinsi dengan produksi dan produktivitas rendah yang memerlukan perhatian khusus untuk pengembangan sektor pertanian.",
      stats: [{ label: "Produksi rata-rata", val: 0.6, dec: 1, unit: " Jt Ton" }, { label: "Luas Panen", val: 0.24, dec: 2, unit: " Jt Ha" }, { label: "Produktivitas", val: 1.56, dec: 2, unit: " Ton/Ha" }],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {clusters.map(({ key, title, desc, stats }) => {
        const c = CLUSTER[key];
        return (
          <Card key={key} style={{ overflow: "hidden" }}>
            <div style={{ height: 4, background: c.color }}/>
            <div style={{ padding: "22px 22px 0" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                background: c.bg, color: c.text, borderRadius: 20,
                fontSize: 11, fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif",
                padding: "3px 9px", marginBottom: 12, border: `1px solid ${c.border}`,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.color }}/>
                Cluster {key} · {c.label}
              </span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", lineHeight: 1.35, marginBottom: 10, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{title}</h3>
              <p style={{ fontSize: 13, color: "#97CADB", lineHeight: 1.6, marginBottom: 20, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{desc}</p>
            </div>
            <div style={{ padding: "16px 22px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: 10 }}>
              {stats.map((s) => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "rgba(151,202,219,0.87)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: c.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={s.val} decimals={s.dec} suffix={s.unit}/></span>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function PerbandinganTab() {
  const radarData = [
    { subject: "Produksi",     A: 100, B: 26, C: 11 },
    { subject: "Luas Panen",   A: 78,  B: 35, C: 20 },
    { subject: "Produktivitas",A: 65,  B: 49, C: 30 },
  ];

  const domTable = [
    { key:"1" as const, komoditas: "Padi"   },
    { key:"2" as const, komoditas: "Jagung" },
    { key:"3" as const, komoditas: "Ubi"    },
  ];

  const tableStats = [
    { key:"1" as const, provinsi:12, produksi:"5,3", luas:"1,17", prod:"3,40", kom:"Padi"   },
    { key:"2" as const, provinsi:16, produksi:"1,4", luas:"0,41", prod:"2,54", kom:"Jagung" },
    { key:"3" as const, provinsi:10, produksi:"0,6", luas:"0,24", prod:"1,56", kom:"Ubi"    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card glass={false} style={{ padding: 24 }}>
          <CardTitle>Perbandingan Rata-rata Fitur per Cluster</CardTitle>
          <ResponsiveContainer width="100%" height={270}>
            <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <PolarGrid stroke="rgba(255,255,255,0.08)"/>
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}/>
              <PolarRadiusAxis angle={90} domain={[0,100]} tick={{ fontSize: 9, fill: "rgba(151,202,219,0.68)" }} tickCount={4}/>
              <Radar name="Cluster 1" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.12} strokeWidth={1.5}/>
              <Radar name="Cluster 2" dataKey="B" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.12} strokeWidth={1.5}/>
              <Radar name="Cluster 3" dataKey="C" stroke="#f87171" fill="#f87171" fillOpacity={0.12} strokeWidth={1.5}/>
              <Tooltip content={<DarkTooltip/>}/>
            </RadarChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 4 }}>
            {[["Cluster 1","#10b981"],["Cluster 2","#f59e0b"],["Cluster 3","#f87171"]].map(([n,c]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: c }}/>
                <span style={{ fontSize: 11, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{n}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: 24 }}>
          <CardTitle>Komoditas Dominan per Cluster</CardTitle>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Cluster","Komoditas Dominan"].map(h => (
                  <th key={h} style={{ textAlign: "left", paddingBottom: 10, fontSize: 10, fontWeight: 600, color: "rgba(151,202,219,0.78)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {domTable.map(({ key, komoditas }) => {
                const c = CLUSTER[key];
                return (
                  <tr key={key} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "14px 0", verticalAlign: "middle" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.color, flexShrink: 0 }}/>
                        <span style={{ fontSize: 13, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Cluster {key} · {c.label}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 0", fontSize: 13, fontWeight: 600, color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{komoditas}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>

      <Card style={{ padding: 24 }}>
        <CardTitle>Statistik Rata-rata per Cluster</CardTitle>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Cluster","Jumlah Provinsi","Produksi (Jt Ton)","Luas Panen (Jt Ha)","Produktivitas (Ton/Ha)","Komoditas Dominan"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "0 8px 10px 0", fontSize: 10, fontWeight: 600, color: "rgba(151,202,219,0.78)", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "Plus Jakarta Sans, sans-serif", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableStats.map(({ key, provinsi, produksi, luas, prod, kom }, i) => {
                const c = CLUSTER[key];
                return (
                  <tr key={key} style={{ borderBottom: i < tableStats.length-1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td style={{ padding: "14px 8px 14px 0", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: c.bg, color: c.text, fontSize: 11, fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif", padding: "3px 8px", borderRadius: 20, border: `1px solid ${c.border}` }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.color }}/>
                        Cluster {key}
                      </span>
                    </td>
                    {[provinsi, produksi, luas, prod, kom].map((v, j) => (
                      <td key={j} style={{ padding: "14px 8px 14px 0", fontSize: 13, color: j === 0 ? "#ffffff" : "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: j === 0 ? 600 : 400 }}>{v}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function ProvinsiTab() {
  const clusters: Array<{ key:"1"|"2"|"3"; label:string; title:string; sub:string; count:number; pct:number; provinces:string[] }> = [
    { key:"1", label:"HIGH CLUSTER",   title:"Cluster Tinggi", sub:"Provinsi dengan indeks tinggi", count:12, pct:85, provinces:HIGH_P },
    { key:"2", label:"MEDIUM CLUSTER", title:"Cluster Sedang", sub:"Provinsi dengan indeks sedang", count:16, pct:55, provinces:MED_P  },
    { key:"3", label:"LOW CLUSTER",    title:"Cluster Rendah", sub:"Provinsi dengan indeks rendah", count:10, pct:25, provinces:LOW_P  },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {clusters.map(({ key, label, title, sub, count, pct, provinces }) => {
        const c = CLUSTER[key];
        return (
          <Card key={key} style={{ overflow: "hidden" }}>
            <div style={{ height: 4, background: c.color }}/>
            <div style={{ padding: "20px 20px 16px" }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(151,202,219,0.68)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 6 }}>{label}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", lineHeight: 1.2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{title}</h3>
              <p style={{ fontSize: 12, color: "#97CADB", marginTop: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{sub}</p>
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{count} Provinsi Terpilih</span>
                  <span style={{ fontSize: 22, fontWeight: 800, color: c.color, lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={pct} suffix="%"/></span>
                </div>
                <div style={{ height: 4, borderRadius: 99, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 99, width: `${pct}%`, background: c.color }}/>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px 6px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(151,202,219,0.68)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Daftar Provinsi</span>
                <span style={{ fontSize: 10, color: "rgba(151,202,219,0.55)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Berdasarkan Indeks</span>
              </div>
              <div style={{ padding: "4px 12px 16px" }}>
                {provinces.map((p, i) => (
                  <div key={p}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 8px", borderRadius: 8, cursor: "pointer", transition: "background 120ms" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 18, textAlign: "right", fontSize: 11, color: "rgba(151,202,219,0.55)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{i+1}</span>
                      <span style={{ fontSize: 13, color: "#D6E8EE", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{p}</span>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.8 3.5 6.5 3.5 6.5s3.5-3.7 3.5-6.5C9.5 2.57 7.93 1 6 1z" stroke="rgba(151,202,219,0.55)" strokeWidth="1.1"/>
                      <circle cx="6" cy="4.5" r="1.2" fill="rgba(151,202,219,0.55)"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
