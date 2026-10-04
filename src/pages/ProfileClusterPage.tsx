import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardTitle, DarkTooltip, CLUSTER, AXIS_STYLE, COMMODITY_AXIS } from "../components/ui";
import AnimatedNumber from "../components/AnimatedNumber";
import { EmptyState, ErrorState, LoadingState, StatePage } from "../components/states";
import { useApiResource } from "../hooks/useApiResource";
import { getProfileClusterData, type ProfileClusterView } from "../services/dashboard";
import type { GoToMap } from "../App";

type Tab = "ringkasan" | "perbandingan" | "provinsi";

export default function ProfileClusterPage({ onGoToMap }: { onGoToMap: GoToMap }) {
  const [tab, setTab] = useState<Tab>("ringkasan");
  const { data, loading, error, refetch } = useApiResource("profile-cluster", getProfileClusterData);

  if (loading) return <StatePage><LoadingState label="Memuat profil kluster…" /></StatePage>;
  if (error) return <StatePage><ErrorState message={error} onRetry={refetch} /></StatePage>;
  if (!data || data.clusterCards.length === 0) {
    return <StatePage><EmptyState label="Data profil kluster belum tersedia." /></StatePage>;
  }

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

      {tab === "ringkasan"    && <RingkasanTab clusters={data.clusterCards} />}
      {tab === "perbandingan" && <PerbandinganTab data={data} />}
      {tab === "provinsi"     && <ProvinsiTab clusters={data.provinceTabs} onGoToMap={onGoToMap} />}
    </div>
  );
}

function RingkasanTab({ clusters }: { clusters: ProfileClusterView["clusterCards"] }) {
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
                Cluster {key}
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

function PerbandinganTab({ data }: { data: ProfileClusterView }) {
  const domTable = data.domTable;
  const tableStats = data.tableStats;

  // Satu bar per cluster; tinggi bar = median produksi komoditas (Juta Ton).
  const series = data.clusterCards.map((c) => ({
    key: c.key,
    name: `Cluster ${c.key}`,
    color: CLUSTER[c.key]?.color ?? "#97CADB",
  }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card glass={false} style={{ padding: 24 }}>
          <CardTitle sub="(Juta Ton)">Median Produksi per Komoditas</CardTitle>
          <ResponsiveContainer width="100%" height={290}>
            <BarChart data={data.comparisonData} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.06)" vertical={false}/>
              <XAxis dataKey="name" {...COMMODITY_AXIS}/>
              <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false}
                tickFormatter={(v: number) => v.toLocaleString("id-ID", { maximumFractionDigits: 1 })}/>
              <Tooltip content={<DarkTooltip formatter={(v) => `${v} Juta Ton`}/>} cursor={{ fill:"rgba(255,255,255,0.03)" }}/>
              {series.map((s) => (
                <Bar key={s.key} dataKey={s.key} name={s.name} fill={s.color} radius={[4,4,0,0]} maxBarSize={16}/>
              ))}
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16, marginTop: 10 }}>
            {series.map((s) => (
              <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color }}/>
                <span style={{ fontSize: 11, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.name}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "rgba(151,202,219,0.7)", lineHeight: 1.6, marginTop: 12, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Tiap kelompok bar adalah satu komoditas, warnanya mengikuti cluster. Bar paling tinggi
            menunjukkan cluster dengan produksi terbesar untuk komoditas tersebut.
          </p>
        </Card>

        <Card style={{ padding: 24 }}>
          <CardTitle sub="(median produksi tertinggi)">Komoditas Dominan per Cluster</CardTitle>
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
                        <span style={{ fontSize: 13, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Cluster {key}</span>
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
                {["Cluster","Jumlah Provinsi","Produksi (Jt Ton)","Komoditas Dominan"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "0 8px 10px 0", fontSize: 10, fontWeight: 600, color: "rgba(151,202,219,0.78)", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "Plus Jakarta Sans, sans-serif", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableStats.map(({ key, provinsi, produksi, kom }, i) => {
                const c = CLUSTER[key];
                return (
                  <tr key={key} style={{ borderBottom: i < tableStats.length-1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td style={{ padding: "14px 8px 14px 0", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: c.bg, color: c.text, fontSize: 11, fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif", padding: "3px 8px", borderRadius: 20, border: `1px solid ${c.border}` }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.color }}/>
                        Cluster {key}
                      </span>
                    </td>
                    {[provinsi, produksi, kom].map((v, j) => (
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

function ProvinsiTab({ clusters, onGoToMap }: { clusters: ProfileClusterView["provinceTabs"]; onGoToMap: GoToMap }) {
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
                <span style={{ fontSize: 10, color: "rgba(151,202,219,0.55)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Klik → Peta</span>
              </div>
              <div style={{ padding: "4px 12px 16px" }}>
                {provinces.map((p, i) => (
                  <div key={p}
                    role="button"
                    tabIndex={0}
                    title={`Lihat ${p} di Peta Kluster`}
                    onClick={() => onGoToMap(p, key)}
                    onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onGoToMap(p, key); } }}
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
