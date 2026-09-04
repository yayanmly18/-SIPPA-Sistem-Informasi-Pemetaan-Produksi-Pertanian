import { useMemo, useRef, useState } from "react";
import { Card } from "../components/ui";
import IndonesiaMap, { type CF, type ProvinceRow } from "../components/IndonesiaMap";

/**
 * Data cluster per provinsi (placeholder — nanti diganti data per tahun 2024/2025/2026).
 * Key mengikuti nama `state` pada file src/data/id.json.
 * Provinsi yang belum punya data cukup diabaikan (tampil samar di peta).
 */
const PROVINCE_DATA: Record<string, ProvinceRow> = {
  // Provinsi dengan detail statistik
  "Jawa Barat":       { cluster: "1", produksi: "5,3 Jt Ton", luas: "1,2 Jt Ha", produktivitas: "4,1 Ton/Ha" },
  "Jawa Timur":       { cluster: "1", produksi: "6,1 Jt Ton", luas: "1,5 Jt Ha", produktivitas: "4,3 Ton/Ha" },
  "Jawa Tengah":      { cluster: "1", produksi: "4,8 Jt Ton", luas: "1,3 Jt Ha", produktivitas: "3,9 Ton/Ha" },
  "Banten":           { cluster: "1" },
  "Sumatera Selatan": { cluster: "1" },
  "Kalimantan Barat": { cluster: "1" },

  "Sumatera Utara":     { cluster: "2", produksi: "1,8 Jt Ton", luas: "0,5 Jt Ha", produktivitas: "2,8 Ton/Ha" },
  "Sulawesi Selatan":   { cluster: "2", produksi: "1,2 Jt Ton", luas: "0,4 Jt Ha", produktivitas: "2,5 Ton/Ha" },
  "Aceh":               { cluster: "2" },
  "Sumatera Barat":     { cluster: "2" },
  "Riau":               { cluster: "2" },
  "Kepulauan Riau":     { cluster: "2" },
  "Jambi":              { cluster: "2" },
  "Bengkulu":           { cluster: "2" },
  "Bangka-Belitung":    { cluster: "2" },
  "Lampung":            { cluster: "2" },
  "Kalimantan Timur":   { cluster: "2" },
  "Kalimantan Selatan": { cluster: "2" },
  "Kalimantan Tengah":  { cluster: "2" },
  "Sulawesi Tenggara":  { cluster: "2" },
  "Bali":               { cluster: "2" },
  "Yogyakarta":         { cluster: "2" },

  "Jakarta Raya":        { cluster: "3", produksi: "2,0 Jt Ton", luas: "1,0 Jt Ha", produktivitas: "4,0 Ton/Ha" },
  "Papua":               { cluster: "3", produksi: "0,4 Jt Ton", luas: "0,2 Jt Ha", produktivitas: "1,3 Ton/Ha" },
  "Maluku":              { cluster: "3", produksi: "0,3 Jt Ton", luas: "0,15 Jt Ha", produktivitas: "1,1 Ton/Ha" },
  "Maluku Utara":        { cluster: "3" },
  "Nusa Tenggara Barat": { cluster: "3" },
  "Nusa Tenggara Timur": { cluster: "3" },
  "Sulawesi Tengah":     { cluster: "3" },
  "Sulawesi Utara":      { cluster: "3" },
  "Sulawesi Barat":      { cluster: "3" },
  "Gorontalo":           { cluster: "3" },
  "Irian Jaya Barat":    { cluster: "3" },
};

const LEGEND = [
  { key: "1" as const, label: "Cluster 1 · Tinggi", color: "#10b981" },
  { key: "2" as const, label: "Cluster 2 · Sedang", color: "#f59e0b" },
  { key: "3" as const, label: "Cluster 3 · Rendah", color: "#f87171" },
];

const clusterName: Record<"1" | "2" | "3", string> = { "1": "Tinggi", "2": "Sedang", "3": "Rendah" };
const clusterColor: Record<"1" | "2" | "3", string> = { "1": "#10b981", "2": "#f59e0b", "3": "#f87171" };

export default function MapPage() {
  const [cf, setCf] = useState<CF>("all");
  const [tip, setTip] = useState<{ name: string; box: { left: number; top: number; width: number; height: number }; vw: number; vh: number } | null>(null);
  const [komoditas, setKomoditas] = useState("Semua");
  const [komOpen, setKomOpen] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const hov = tip ? PROVINCE_DATA[tip.name] : null;
  const hover = (
    name: string,
    box: { left: number; top: number; width: number; height: number },
  ) => setTip({ name, box, vw: window.innerWidth, vh: window.innerHeight });
  const leave = () => setTip(null);

  const counts = useMemo(() => {
    const c: Record<"1" | "2" | "3", number> = { "1": 0, "2": 0, "3": 0 };
    Object.values(PROVINCE_DATA).forEach((r) => c[r.cluster]++);
    return c;
  }, []);

  // Tooltip sits beside the hovered region, clamped INSIDE the map container.
  const TIP_W = 230;
  let tipL = 16, tipT = 16;
  if (tip) {
    const hasDetail = Boolean(PROVINCE_DATA[tip.name]?.produksi || PROVINCE_DATA[tip.name]?.luas || PROVINCE_DATA[tip.name]?.produktivitas);
    const estH = hasDetail ? 170 : 110;
    const cr = mapRef.current?.getBoundingClientRect();
    const area = cr
      ? { left: 8, top: 8, width: cr.width - 16, height: cr.height - 16 }
      : { left: 8, top: 8, width: tip.vw - 16, height: tip.vh - 16 };

    // Region coords relative to the map container.
    const bx = cr ? tip.box.left - cr.left : tip.box.left;
    const by = cr ? tip.box.top - cr.top : tip.box.top;
    const bw = tip.box.width;

    // Prefer placing to the right of the region, otherwise left.
    tipL = bx + bw + 12;
    if (tipL + TIP_W > area.left + area.width) tipL = bx - TIP_W - 12;
    tipL = Math.max(area.left, Math.min(tipL, area.left + area.width - TIP_W));

    // Align vertically near the region's top; clamp inside the container.
    tipT = Math.max(8, Math.min(by, area.top + area.height - estH));
  }
return (
    <div className="p-4 md:p-7 flex flex-col gap-5">
      {/* Filter bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", background: "rgba(0,15,46,0.45)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderRadius: 12, padding: 4, gap: 2, border: "1px solid rgba(151,202,219,0.14)" }}>
          {([{ key: "all", label: "Semua" }, ...LEGEND] as const).map((item) => {
            const active = cf === item.key;
            return (
              <button key={item.key} onClick={() => setCf(item.key as CF)}
                style={{
                  display: "flex", alignItems: "center", gap: 6, padding: "7px 14px",
                  borderRadius: 8, fontSize: 12, fontWeight: active ? 600 : 400, fontFamily: "Plus Jakarta Sans, sans-serif",
                  background: active ? "rgba(1,138,190,0.35)" : "transparent",
                  color: active ? "white" : "rgba(151,202,219,0.87)",
                  border: active ? "1px solid rgba(1,138,190,0.4)" : "1px solid transparent",
                  cursor: "pointer", transition: "all 150ms ease",
                }}>
                {"color" in item && <span style={{ width: 7, height: 7, borderRadius: "50%", background: item.color, flexShrink: 0 }}/>}
                {item.label}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative" }}>
            <button onClick={() => setKomOpen(!komOpen)}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 500, fontFamily: "Plus Jakarta Sans, sans-serif", background: "rgba(151,202,219,0.07)", border: "1px solid rgba(151,202,219,0.14)", color: "#D6E8EE", cursor: "pointer", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M4 6.5h5M6.5 4v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {komoditas}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            </button>
            {komOpen && (
              <div style={{ position: "absolute", right: 0, top: "calc(100% + 4px)", background: "rgba(0,15,46,0.9)", border: "1px solid rgba(151,202,219,0.16)", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.4)", overflow: "hidden", minWidth: 130, zIndex: 20, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                {["Semua", "Padi", "Jagung", "Ubi", "Kedelai", "Sayuran"].map(k => (
                  <button key={k} onClick={() => { setKomoditas(k); setKomOpen(false); }}
                    style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 14px", fontSize: 13, fontFamily: "Plus Jakarta Sans, sans-serif", background: komoditas === k ? "rgba(1,138,190,0.2)" : "transparent", color: komoditas === k ? "#97CADB" : "rgba(151,202,219,0.87)", fontWeight: komoditas === k ? 600 : 400, border: "none", cursor: "pointer" }}>
                    {k}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => { setCf("all"); setKomoditas("Semua"); }}
            style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 500, fontFamily: "Plus Jakarta Sans, sans-serif", background: "rgba(151,202,219,0.07)", border: "1px solid rgba(151,202,219,0.14)", color: "rgba(151,202,219,0.87)", cursor: "pointer" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            Reset
          </button>
        </div>
      </div>

      {/* Map */}
      <Card glass={false} style={{ overflow: "hidden", position: "relative" }}>
        <div ref={mapRef} style={{ position: "relative", height: 400 }}>
          <IndonesiaMap cf={cf} data={PROVINCE_DATA} activeName={tip?.name ?? null} onHover={hover} onLeave={leave} />
          {tip && hov && (
            <div style={{
              position: "absolute", zIndex: 50, left: tipL, top: tipT, width: TIP_W,
              background: "rgba(0,15,46,0.97)", border: "1px solid rgba(151,202,219,0.2)",
              borderRadius: 12, padding: "12px 16px", minWidth: 200, pointerEvents: "none",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 4, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{tip.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: clusterColor[hov.cluster] }}/>
                <span style={{ fontSize: 11, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Cluster {hov.cluster} · {clusterName[hov.cluster]}</span>
              </div>
              {hov.produksi || hov.luas || hov.produktivitas ? (
                [["Produksi", hov.produksi], ["Luas Panen", hov.luas], ["Produktivitas", hov.produktivitas]].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{k}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "white", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{v}</span>
                  </div>
                ))
              ) : (
                <div style={{ fontSize: 11, color: "rgba(151,202,219,0.87)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Detail data belum tersedia</div>
              )}
            </div>
          )}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card style={{ padding: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 16 }}>Ringkasan Kluster</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { count: counts["1"], sub: "Cluster 1 · Tinggi", color: "#10b981", bg: "rgba(16,185,129,0.15)" },
              { count: counts["2"], sub: "Cluster 2 · Sedang", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
              { count: counts["3"], sub: "Cluster 3 · Rendah", color: "#f87171", bg: "rgba(248,113,113,0.15)" },
            ].map(item => (
              <div key={item.sub} style={{ background: item.bg, borderRadius: 12, padding: "16px 12px", textAlign: "center", border: `1px solid ${item.color}33` }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: item.color, lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{item.count}</div>
                <div style={{ fontSize: 10, color: "rgba(151,202,219,0.87)", marginTop: 4, fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: 1.4 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 10 }}>Keterangan</h3>
          <p style={{ fontSize: 13, color: "#97CADB", lineHeight: 1.7, marginBottom: 16, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Peta menampilkan distribusi kluster pangan Indonesia berdasarkan produksi, luas panen, dan produktivitas menggunakan K-Means (K=3). Provinsi tanpa data tampil samar.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {LEGEND.map(l => (
              <div key={l.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: l.color, flexShrink: 0 }}/>
                <span style={{ fontSize: 12, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}