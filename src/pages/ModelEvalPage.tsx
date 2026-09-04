import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Card, CardTitle, DarkTooltip, AXIS_STYLE } from "../components/ui";
import AnimatedNumber from "../components/AnimatedNumber";
import { TABLE, TOP, METRIC_CHARTS, BEST_K, PCA } from "../data/modelEval";

const SelDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (payload.k === BEST_K) return <circle cx={cx} cy={cy} r={5.5} fill="#018ABE" stroke="white" strokeWidth={2}/>;
  return <circle cx={cx} cy={cy} r={3} fill="rgba(151,202,219,0.68)" stroke="rgba(255,255,255,0.2)" strokeWidth={1.5}/>;
};

export default function ModelEvalPage() {
  return (
    <div className="p-4 md:p-7 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {TOP.map((m) => (
          <Card key={m.label} style={{ padding:"20px 22px", borderTop:`3px solid ${m.color}` }}>
            <div style={{ fontSize:11, color:"rgba(151,202,219,0.78)", textTransform:"uppercase", letterSpacing:"0.07em", fontFamily:"Plus Jakarta Sans, sans-serif", marginBottom:10 }}>{m.label}</div>
            <div style={{ fontSize:30, fontWeight:800, color:"#ffffff", lineHeight:1, fontFamily:"Plus Jakarta Sans, sans-serif", marginBottom:8 }}><AnimatedNumber value={m.value} decimals={m.dec}/></div>
            <div style={{ display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ fontSize:11, fontWeight:600, color:m.color, fontFamily:"Plus Jakarta Sans, sans-serif" }}>{m.unit}</span>
            </div>
            {m.pct && (
              <div style={{ marginTop:10, height:3, borderRadius:99, background:"rgba(255,255,255,0.07)", overflow:"hidden" }}>
                <div style={{ height:"100%", borderRadius:99, width:`${m.pct}%`, background:m.color }}/>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {METRIC_CHARTS.map((ch) => (
          <Card key={ch.title} glass={false} style={{ padding:"20px 20px 16px" }}>
            <h3 style={{ fontSize:13, fontWeight:600, color:"#ffffff", fontFamily:"Plus Jakarta Sans, sans-serif", marginBottom:16 }}>{ch.title}</h3>
            <ResponsiveContainer width="100%" height={190}>
              <LineChart data={ch.data} margin={{ top:4, right:4, left:-16, bottom:0 }}>
                <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.06)" vertical={false}/>
                <XAxis dataKey="k" tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
                <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
                <Tooltip content={<DarkTooltip label={undefined} formatter={(v) => `K=${ch.data.find(d=>d.v===v)?.k??""} → ${v}`}/>}
                  cursor={{ stroke:"rgba(255,255,255,0.06)", strokeWidth:1 }}/>
                <ReferenceLine x={BEST_K} stroke={ch.color} strokeDasharray="3 3" strokeOpacity={0.5}/>
                <Line type="monotone" dataKey="v" stroke={ch.color} strokeWidth={2.5} dot={<SelDot/>} activeDot={{ r:5 }} name={ch.label}/>
              </LineChart>
            </ResponsiveContainer>
            <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:4 }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:ch.color, flexShrink:0 }}/>
              <span style={{ fontSize:11, color:"rgba(151,202,219,0.78)", fontFamily:"Plus Jakarta Sans, sans-serif" }}>Titik optimal K={BEST_K}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card style={{ padding:24 }}>
          <CardTitle>Stabilitas Model</CardTitle>
          <table style={{ width:"100%", borderCollapse:"collapse" }}>
            <thead>
              <tr style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                {["K","Silhouette Score","DBI","Inertia"].map(h => (
                  <th key={h} style={{ textAlign:"left", padding:"0 8px 10px 0", fontSize:10, fontWeight:600, color:"rgba(151,202,219,0.78)", textTransform:"uppercase", letterSpacing:"0.07em", fontFamily:"Plus Jakarta Sans, sans-serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE.map((row) => (
                <tr key={row.k} style={{ background:row.sel?"rgba(1,138,190,0.1)":"transparent", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding:"13px 8px 13px 0", fontSize:13, fontWeight:row.sel?700:400, color:row.sel?"#018ABE":"rgba(151,202,219,0.78)", fontFamily:"Plus Jakarta Sans, sans-serif" }}>
                    {row.sel && <span style={{ display:"inline-block", width:6, height:6, borderRadius:"50%", background:"#018ABE", marginRight:6 }}/>}
                    {row.k}
                  </td>
                  {[row.sil,row.dbi,row.inertia].map((v,i) => (
                    <td key={i} style={{ padding:"13px 8px 13px 0", fontSize:13, color:row.sel?"#97CADB":"rgba(151,202,219,0.78)", fontWeight:row.sel?600:400, fontFamily:"Plus Jakarta Sans, sans-serif" }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card style={{ padding:24 }}>
          <CardTitle>Alasan Pemilihan K={BEST_K}</CardTitle>
          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:16 }}>
            {PCA.slice(0,3).map((item, i) => (
              <div key={item.component} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"13px 16px", borderRadius:10, background:["rgba(1,138,190,0.12)","rgba(16,185,129,0.12)","rgba(245,158,11,0.12)"][i], border:`1px solid ${["rgba(1,138,190,0.3)","rgba(16,185,129,0.3)","rgba(245,158,11,0.3)"][i]}` }}>
                <span style={{ fontSize:13, color:"#D6E8EE", fontFamily:"Plus Jakarta Sans, sans-serif", fontWeight:500 }}>PC{item.component} — {(item.explained * 100).toFixed(1)}%</span>
                <span style={{ fontSize:14, fontWeight:700, color:["#018ABE","#10b981","#f59e0b"][i], fontFamily:"Plus Jakarta Sans, sans-serif" }}>Kumulatif {(item.cumulative * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:12, color:"rgba(151,202,219,0.87)", lineHeight:1.7, fontFamily:"Plus Jakarta Sans, sans-serif", borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:14 }}>
            Elbow curve menunjukkan inflection point jelas pada K={BEST_K}. Kombinasi ketiga indeks validasi secara konsisten menunjukkan K={BEST_K} sebagai jumlah kluster yang paling optimal dan stabil untuk data pertanian tanaman pangan Indonesia.
          </p>
        </Card>
      </div>
    </div>
  );
}
