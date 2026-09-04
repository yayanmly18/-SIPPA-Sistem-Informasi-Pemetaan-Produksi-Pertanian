import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";
import type { ComponentType } from "react";
import { Card, CardTitle, DarkTooltip, AXIS_STYLE } from "../components/ui";
import AnimatedNumber from "../components/AnimatedNumber";
import { stats, pieData, komoditasTop, clusterProd, barColors } from "../data/overview";
import { PROVINCE_TOTAL } from "../data/provinceDetail";

function MapIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4.5L6.5 2.5l5 3 4.5-2.5V14L11.5 16l-5-3L2 14.5V4.5z" stroke="#018ABE" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6.5 2.5v11M11.5 5.5v11" stroke="#018ABE" strokeWidth="1.5"/></svg>;
}
function ClusterIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="2.5" stroke="#018ABE" strokeWidth="1.5"/><circle cx="3.5" cy="4" r="2" stroke="#018ABE" strokeWidth="1.3"/><circle cx="14.5" cy="4" r="2" stroke="#018ABE" strokeWidth="1.3"/><circle cx="3.5" cy="14" r="2" stroke="#018ABE" strokeWidth="1.3"/><circle cx="14.5" cy="14" r="2" stroke="#018ABE" strokeWidth="1.3"/></svg>;
}
function LeafIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 15C3 15 4 8 12 6c0 0-1 6-7 7" stroke="#018ABE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 15c2-3 5-4 8-3" stroke="#018ABE" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function CalIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1.5" y="3" width="15" height="13" rx="2.5" stroke="#018ABE" strokeWidth="1.5"/><path d="M1.5 7h15M6 1.5v3M12 1.5v3" stroke="#018ABE" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

const statCards: Array<{ label: string; value: number | string; decimals?: number; suffix?: string; icon: ComponentType }> = [
  { label: "Provinsi",    value: stats.provinces,   icon: MapIcon     },
  { label: "Kluster",     value: stats.clusters,    icon: ClusterIcon },
  { label: "Komoditas",   value: stats.commodities, icon: LeafIcon    },
  { label: "Periode Data",value: stats.period,      icon: CalIcon     },
];

export default function OverviewPage() {
  return (
    <div className="p-4 md:p-7 flex flex-col gap-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(({ label, value, decimals, suffix, icon: Icon }) => (
          <Card key={label} style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: "rgba(1,138,190,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon/>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#ffffff", lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {typeof value === "number" ? <AnimatedNumber value={value} decimals={decimals ?? 0} suffix={suffix ?? ""}/> : value}
              </div>
              <div style={{ fontSize: 12, color: "#97CADB", marginTop: 3, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{label}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5">
        <Card glass={false} style={{ padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
            <div>
              <div style={{ fontSize: 13, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 6 }}>
                Total Produksi Nasional <span style={{ color: "rgba(151,202,219,0.68)" }}>· {stats.period}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#ffffff", lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={Object.values(PROVINCE_TOTAL).reduce((a, b) => a + b, 0)} decimals={1}/></span>
                <span style={{ fontSize: 16, fontWeight: 500, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Juta Ton</span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: "rgba(151,202,219,0.68)", marginBottom: 8, marginTop: 16, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Total produksi per komoditas (Juta Ton)</div>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={komoditasTop.map(k => ({ name: k.name.length > 10 ? k.name.slice(0, 9) + "…" : k.name, v: Number((k.ton / 1e6).toFixed(3)) }))} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.06)" vertical={false}/>
              <XAxis dataKey="name" tick={{ ...AXIS_STYLE, fontSize: 9 }} axisLine={false} tickLine={false} interval={0} angle={-25} textAnchor="end" height={46}/>
              <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
              <Tooltip content={<DarkTooltip formatter={(v) => `${v} Juta Ton`}/>} cursor={{ fill: "rgba(255,255,255,0.04)" }}/>
              <Bar dataKey="v" fill="#018ABE" radius={[5,5,0,0]} maxBarSize={34}/>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card style={{ padding: "24px", display: "flex", flexDirection: "column" }}>
          <CardTitle>Distribusi Provinsi per Cluster</CardTitle>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <PieChart width={180} height={180}>
              <Pie data={pieData} cx={85} cy={85} innerRadius={55} outerRadius={78} dataKey="value" stroke="none" startAngle={90} endAngle={-270}>
                {pieData.map((d, i) => <Cell key={i} fill={d.color}/>)}
              </Pie>
            </PieChart>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", pointerEvents: "none" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#ffffff", lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{stats.provinces}</div>
              <div style={{ fontSize: 10, color: "#97CADB", marginTop: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Provinsi</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            {pieData.map((d) => (
              <div key={d.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: d.color, flexShrink: 0 }}/>
                  <span style={{ fontSize: 12, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{d.name}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{d.count}</span>
                  <span style={{ fontSize: 11, color: "rgba(151,202,219,0.78)", marginLeft: 6, fontFamily: "Plus Jakarta Sans, sans-serif" }}>({d.value}%)</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5">
        <Card style={{ padding: "24px" }}>
          <CardTitle sub={`Total produksi ${stats.period}`}>Top 8 Komoditas</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {komoditasTop.map((k, i) => (
              <div key={k.name} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 110, textAlign: "right", fontSize: 12, color: "#97CADB", flexShrink: 0, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{k.name}</div>
                <div style={{ flex: 1, height: 8, borderRadius: 99, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 99, width: `${k.pct}%`, background: barColors[i], transition: "width 600ms cubic-bezier(0.4,0,0.2,1)" }}/>
                </div>
                <div style={{ width: 70, fontSize: 12, fontWeight: 600, color: "#D6E8EE", flexShrink: 0, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{(k.ton / 1e6).toLocaleString("id-ID", { maximumFractionDigits: 2 })} Jt</div>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div style={{ fontSize: 12, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 8 }}>Rata-rata Produksi per Provinsi</div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: "#ffffff", lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={Object.values(PROVINCE_TOTAL).reduce((a, b) => a + b, 0) / Object.keys(PROVINCE_TOTAL).length} decimals={2}/></span>
                <span style={{ fontSize: 14, color: "#97CADB", fontWeight: 500, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Juta Ton</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(151,202,219,0.92)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Peringkat per Cluster</div>
            {clusterProd.map((c) => (
              <div key={c.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: c.color, flexShrink: 0 }}/>
                    <span style={{ fontSize: 12, color: "#D6E8EE", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{c.label}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: c.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={c.val} decimals={1}/> Ton/Ha</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: "rgba(255,255,255,0.12)", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 99, width: `${c.pct}%`, background: c.color, transition: "width 600ms" }}/>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: 11, color: "rgba(151,202,219,0.68)", lineHeight: 1.5, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Rata-rata produksi pertanian per provinsi berdasarkan data {stats.period}.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
