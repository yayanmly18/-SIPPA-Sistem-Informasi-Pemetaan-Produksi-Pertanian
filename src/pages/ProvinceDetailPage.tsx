import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, CardTitle, DarkTooltip, ClusterBadge, AXIS_STYLE } from "../components/ui";
import AnimatedNumber from "../components/AnimatedNumber";
import { PROVINCES, PROVINCE_CLUSTER, PROVINCE_TOTAL, KOM_DATA, CMP_DATA, NAS, GRANULARITY, LINE_BY_GRAN, type Granularity } from "../data/provinceDetail";

function ChevronDown() {
  return <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
}

export default function ProvinceDetailPage() {
  const [prov, setProv] = useState("Jawa Barat");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [gran, setGran] = useState<Granularity>("Per Tahun");
  const [granOpen, setGranOpen] = useState(false);
  const lineData = LINE_BY_GRAN[gran];
  const filtered = PROVINCES.filter(p => p.toLowerCase().includes(query.trim().toLowerCase()));
  const provCluster = PROVINCE_CLUSTER[prov] ?? "1";
  const provTotal = PROVINCE_TOTAL[prov] ?? 0;

  return (
    <div className="p-4 md:p-7 flex flex-col gap-5">
      <Card glass={false} style={{ overflow:"visible", position:"relative", zIndex:30 }}>
        <div style={{ padding:"20px 24px 0", display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <div>
            <ClusterBadge cluster={provCluster}/>
            <h2 style={{ fontSize:28, fontWeight:800, color:"#ffffff", lineHeight:1, marginTop:8, fontFamily:"Plus Jakarta Sans, sans-serif" }}>{prov}</h2>
            <p style={{ fontSize:13, color:"#97CADB", marginTop:4, fontFamily:"Plus Jakarta Sans, sans-serif" }}>Total produksi: {(provTotal / 1e6).toFixed(2)} Juta Ton</p>
          </div>

          <div style={{ position:"relative" }}>
            <button onClick={() => setOpen(!open)}
              style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 14px", borderRadius:10, fontSize:13, fontWeight:500, fontFamily:"Plus Jakarta Sans, sans-serif", background: open ? "rgba(1,138,190,0.22)" : "rgba(151,202,219,0.07)", border: `1px solid ${open ? "rgba(1,138,190,0.55)" : "rgba(151,202,219,0.16)"}`, color:"#D6E8EE", cursor:"pointer", transition:"background 160ms ease, border-color 160ms ease" }}>
              {prov} <span style={{ transform: open ? "rotate(180deg)" : "none", transition:"transform 200ms cubic-bezier(0.2,0.8,0.2,1)", display:"flex" }}><ChevronDown/></span>
            </button>
            {open && (
              <>
                <div style={{ position:"fixed", inset:0, zIndex:39 }} onClick={() => { setOpen(false); setQuery(""); }} />
                <div className="year-menu" style={{ position:"absolute", right:0, top:"calc(100% + 8px)", width:240, zIndex:40, background:"#00142E", border:"1px solid rgba(151,202,219,0.18)", borderRadius:14, boxShadow:"0 16px 40px rgba(0,5,20,0.55)", padding:8 }}>
                  <div style={{ position:"relative", marginBottom:8 }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)" }}>
                      <circle cx="5.5" cy="5.5" r="4" stroke="rgba(151,202,219,0.55)" strokeWidth="1.3"/>
                      <path d="M8.8 8.8L12 12" stroke="rgba(151,202,219,0.55)" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    <input
                      autoFocus
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                      placeholder="Cari provinsi..."
                      style={{ width:"100%", boxSizing:"border-box", padding:"8px 10px 8px 30px", borderRadius:9, fontSize:12, fontFamily:"Plus Jakarta Sans, sans-serif", background:"rgba(1,138,190,0.1)", border:"1px solid rgba(151,202,219,0.16)", color:"#D6E8EE", outline:"none" }}
                    />
                  </div>
                  <div className="prov-list" style={{ maxHeight:250, overflowY:"auto", display:"flex", flexDirection:"column", gap:2, paddingRight:2 }}>
                    {filtered.length === 0 && (
                      <div style={{ padding:"14px 10px", fontSize:12, color:"rgba(151,202,219,0.6)", textAlign:"center", fontFamily:"Plus Jakarta Sans, sans-serif" }}>
                        Provinsi tidak ditemukan
                      </div>
                    )}
                    {filtered.map(p => {
                      const active = prov === p;
                      return (
                        <button key={p} onClick={() => { setProv(p); setOpen(false); setQuery(""); }}
                          onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(1,138,190,0.14)"; }}
                          onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                          style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", textAlign:"left", padding:"8px 11px", borderRadius:9, fontSize:13, fontFamily:"Plus Jakarta Sans, sans-serif", background: active ? "linear-gradient(90deg, rgba(1,138,190,0.35), rgba(1,138,190,0.12))" : "transparent", color: active ? "#ffffff" : "rgba(214,232,238,0.88)", fontWeight: active ? 700 : 500, border:"none", cursor:"pointer", flexShrink:0 }}>
                          <span style={{ display:"flex", alignItems:"center", gap:8, minWidth:0 }}>
                            <span style={{ width:6, height:6, borderRadius:"50%", flexShrink:0, background: active ? "#3FBDEB" : "rgba(151,202,219,0.25)", boxShadow: active ? "0 0 8px rgba(63,189,235,0.8)" : "none" }}/>
                            <span style={{ overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p}</span>
                          </span>
                          {active && (
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink:0 }}>
                              <path d="M2.5 6.8l2.6 2.6L10.5 4" stroke="#3FBDEB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ marginTop:20, borderTop:"1px solid rgba(255,255,255,0.06)" }}>
          {[
            { label:"Produksi",         value:"5,3", unit:"Juta Ton",      color:"#10b981" },
            { label:"Luas Panen",        value:"1,2", unit:"Juta Ha",       color:"#f59e0b" },
            { label:"Produktivitas",     value:"4,1", unit:"Ton/Ha",        color:"#018ABE" },
            { label:"Rangking Nasional", value:"#2",  unit:"Dalam Produksi",color:"#a78bfa" },
          ].map((s, i) => (
            <div key={s.label} style={{ padding:"18px 24px", textAlign:"center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontSize:11, color:"rgba(151,202,219,0.78)", textTransform:"uppercase", letterSpacing:"0.07em", fontFamily:"Plus Jakarta Sans, sans-serif", marginBottom:6 }}>{s.label}</div>
              <div style={{ fontSize:28, fontWeight:800, color:s.color, lineHeight:1, fontFamily:"Plus Jakarta Sans, sans-serif" }}>{s.value}</div>
              <div style={{ fontSize:11, color:"rgba(151,202,219,0.62)", marginTop:4, fontFamily:"Plus Jakarta Sans, sans-serif" }}>{s.unit}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card glass={false} style={{ padding:24 }}>
          <CardTitle sub="(Juta Ton)">Produksi per Komoditas</CardTitle>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={KOM_DATA} margin={{ top:0, right:0, left:-20, bottom:0 }}>
              <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.06)" vertical={false}/>
              <XAxis dataKey="name" tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
              <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
              <Tooltip content={<DarkTooltip formatter={v=>`${v} Juta Ton`}/>} cursor={{ fill:"rgba(255,255,255,0.03)" }}/>
              <Bar dataKey="value" fill="#018ABE" radius={[5,5,0,0]} maxBarSize={32}/>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card style={{ padding:24 }}>
          <CardTitle>Perbandingan Dengan Rata-rata Cluster</CardTitle>
          <div style={{ display:"flex", gap:16, marginBottom:16 }}>
            {[[prov,"#018ABE"],["Rata-rata Cluster","rgba(255,255,255,0.15)"]].map(([n,c]) => (
              <div key={n} style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ width:10, height:6, borderRadius:3, background:c }}/>
                <span style={{ fontSize:11, color:"#97CADB", fontFamily:"Plus Jakarta Sans, sans-serif" }}>{n}</span>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={195}>
            <BarChart data={CMP_DATA} margin={{ top:0, right:0, left:-20, bottom:12 }}>
              <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.06)" vertical={false}/>
              <XAxis dataKey="name" tick={{ ...AXIS_STYLE, fontSize:10 }} axisLine={false} tickLine={false}/>
              <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
              <Tooltip content={<DarkTooltip/>} cursor={{ fill:"rgba(255,255,255,0.03)" }}/>
              <Bar dataKey="province" name={prov} fill="#018ABE" radius={[5,5,0,0]} maxBarSize={26}/>
              <Bar dataKey="cluster" name="Rata-rata" fill="rgba(255,255,255,0.15)" radius={[5,5,0,0]} maxBarSize={26}/>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card glass={false} style={{ padding:24, position:"relative", zIndex:20 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 }}>
            <CardTitle sub="(Juta Ton)">Total Produksi: {(provTotal / 1e6).toFixed(2)} Jt</CardTitle>
            <div style={{ position:"relative" }}>
              <button onClick={() => setGranOpen(!granOpen)}
                style={{ display:"flex", alignItems:"center", gap:4, padding:"6px 12px", borderRadius:8, fontSize:11, fontWeight:500, fontFamily:"Plus Jakarta Sans, sans-serif", background: granOpen ? "rgba(1,138,190,0.22)" : "rgba(255,255,255,0.07)", border:`1px solid ${granOpen ? "rgba(1,138,190,0.55)" : "rgba(255,255,255,0.1)"}`, color:"#97CADB", cursor:"pointer" }}>
                {gran} <ChevronDown/>
              </button>
              {granOpen && (
                <div style={{ position:"absolute", top:"calc(100% + 6px)", right:0, minWidth:130, background:"#0B1620", border:"1px solid rgba(151,202,219,0.18)", borderRadius:10, padding:6, boxShadow:"0 12px 32px rgba(0,0,0,0.45)", zIndex:50 }}>
                  {GRANULARITY.map(g => (
                    <button key={g} onClick={() => { setGran(g as Granularity); setGranOpen(false); }}
                      style={{ display:"block", width:"100%", textAlign:"left", padding:"8px 10px", borderRadius:7, fontSize:12, fontFamily:"Plus Jakarta Sans, sans-serif", fontWeight:500, background: g === gran ? "rgba(1,138,190,0.2)" : "transparent", color: g === gran ? "#018ABE" : "#D6E8EE", border:"none", cursor:"pointer" }}>
                      {g}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData} margin={{ top:4, right:4, left:-20, bottom:0 }}>
              <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.06)" vertical={false}/>
              <XAxis dataKey="m" tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
              <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false}/>
              <Tooltip content={<DarkTooltip formatter={v=>`${v} Juta Ton`}/>} cursor={{ stroke:"rgba(255,255,255,0.06)", strokeWidth:1 }}/>
              <Line type="monotone" dataKey="v" stroke="#018ABE" strokeWidth={2.5}
                dot={{ r:3.5, fill:"#018ABE", stroke:"rgba(255,255,255,0.3)", strokeWidth:2 }}
                activeDot={{ r:5, fill:"#018ABE", stroke:"white", strokeWidth:2 }}/>
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card style={{ padding:24 }}>
          <CardTitle>Rata-rata Produktivitas Nasional</CardTitle>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {NAS.map((s) => (
              <div key={s.label} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderRadius:12, background:s.bg, border:`1px solid ${s.border}` }}>
                <span style={{ fontSize:13, color:"#D6E8EE", fontFamily:"Plus Jakarta Sans, sans-serif", fontWeight:500 }}>{s.label}</span>
                <span style={{ fontSize:15, fontWeight:700, color:s.color, fontFamily:"Plus Jakarta Sans, sans-serif" }}><AnimatedNumber value={s.num} decimals={s.dec} suffix={s.unit}/></span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
