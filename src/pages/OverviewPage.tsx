import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";
import type { ComponentType } from "react";
import { Card, CardTitle, DarkTooltip, AXIS_STYLE } from "../components/ui";
import AnimatedNumber from "../components/AnimatedNumber";

const prodData = [
  { year: "2015", v: 320 }, { year: "2016", v: 395 }, { year: "2017", v: 430 },
  { year: "2018", v: 470 }, { year: "2019", v: 530 }, { year: "2020", v: 575 },
  { year: "2021", v: 595 }, { year: "2022", v: 618 }, { year: "2023", v: 652 },
  { year: "2024", v: 730 }, { year: "2025", v: 880 }, { year: "2026", v: 1060 },
];

const pieData = [
  { name: "Cluster 1 · Tinggi",  value: 30, count: "12 Provinsi", color: "#10b981" },
  { name: "Cluster 2 · Sedang", value: 50, count: "16 Provinsi", color: "#f59e0b" },
  { name: "Cluster 3 · Rendah", value: 20, count: "10 Provinsi", color: "#f87171" },
];

const komoditas = [
  { name: "Padi",    ton: 12, pct: 100 },
  { name: "Jagung",  ton: 9,  pct: 75  },
  { name: "Kedelai", ton: 6,  pct: 50  },
  { name: "Ubi",     ton: 5,  pct: 42  },
  { name: "Cengkeh", ton: 3.5,pct: 29  },
];

const clusterProd = [
  { label: "Cluster 1 · Tinggi",  val: 5.9, pct: 83, color: "#10b981" },
  { label: "Cluster 2 · Sedang", val: 4.2, pct: 58, color: "#f59e0b" },
  { label: "Cluster 3 · Rendah", val: 2.1, pct: 29, color: "#f87171" },
];

const barColors = ["#018ABE", "#97CADB", "#D6E8EE", "rgba(214,232,238,0.6)", "rgba(214,232,238,0.4)"];

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
  { label: "Provinsi",    value: 38,            icon: MapIcon     },
  { label: "Kluster",     value: 3,             icon: ClusterIcon },
  { label: "Komoditas",   value: 5, suffix: "+", icon: LeafIcon    },
  { label: "Periode Data",value: "2024–2026",   icon: CalIcon     },
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
                Ringkasan Produksi Nasional <span style={{ color: "rgba(151,202,219,0.68)" }}>· Rata-rata/Tahun</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#ffffff", lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={35.5} decimals={1}/></span>
                <span style={{ fontSize: 16, fontWeight: 500, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Juta Ton</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(1,138,190,0.2)", color: "#97CADB", fontSize: 12, fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif", padding: "5px 10px", borderRadius: 20, border: "1px solid rgba(1,138,190,0.3)" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 8V2M2 5l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              +6% dari tahun lalu
            </div>
          </div>
          <div style={{ fontSize: 10, color: "rgba(151,202,219,0.68)", marginBottom: 8, marginTop: 16, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Juta Ton</div>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={prodData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.06)" vertical={false}/>
              <XAxis dataKey="year" tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
              <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} domain={[0, 1200]} ticks={[0,200,400,600,800,1000,1200]}/>
              <Tooltip content={<DarkTooltip formatter={(v) => `${v} Juta Ton`}/>} cursor={{ stroke: "rgba(255,255,255,0.08)", strokeWidth: 1 }}/>
              <Line type="monotone" dataKey="v" stroke="#018ABE" strokeWidth={2.5}
                dot={{ r: 3.5, fill: "#018ABE", stroke: "rgba(255,255,255,0.3)", strokeWidth: 2 }}
                activeDot={{ r: 5, fill: "#018ABE", stroke: "white", strokeWidth: 2 }}/>
            </LineChart>
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
              <div style={{ fontSize: 26, fontWeight: 800, color: "#ffffff", lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>38</div>
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
          <CardTitle sub="Total produksi rata-rata per tahun">Top 5 Komoditas</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {komoditas.map((k, i) => (
              <div key={k.name} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 56, textAlign: "right", fontSize: 12, color: "#97CADB", flexShrink: 0, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{k.name}</div>
                <div style={{ flex: 1, height: 8, borderRadius: 99, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 99, width: `${k.pct}%`, background: barColors[i], transition: "width 600ms cubic-bezier(0.4,0,0.2,1)" }}/>
                </div>
                <div style={{ width: 40, fontSize: 12, fontWeight: 600, color: "#D6E8EE", flexShrink: 0, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{k.ton} T</div>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div style={{ fontSize: 12, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 8 }}>Rata-rata Produktivitas Nasional</div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: "#ffffff", lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={4.8} decimals={1}/></span>
                <span style={{ fontSize: 14, color: "#97CADB", fontWeight: 500, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Ton/Ha</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(1,138,190,0.2)", color: "#97CADB", fontSize: 11, fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif", padding: "4px 8px", borderRadius: 20, border: "1px solid rgba(1,138,190,0.3)" }}>▲ +2.3%</div>
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
              Rata-rata produksi tanaman pangan utama per hektar pada tahun 2024.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
