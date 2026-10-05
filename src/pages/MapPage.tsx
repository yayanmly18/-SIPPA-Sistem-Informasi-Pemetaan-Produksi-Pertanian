import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "../components/ui";
import IndonesiaMap, { type CF } from "../components/IndonesiaMap";
import { EmptyState, ErrorState, LoadingState, StatePage } from "../components/states";
import { useApiResource } from "../hooks/useApiResource";
import useIsMobile from "../hooks/useIsMobile";
import { getMapViewData } from "../services/dashboard";

type Props = {
  /** Provinsi yang disorot saat datang dari drill-down Profil Kluster. */
  focusProvince?: string | null;
  /** Cluster yang difilter saat datang dari drill-down Profil Kluster. */
  focusCluster?: string | null;
};

export default function MapPage({ focusProvince = null, focusCluster = null }: Props) {
  const { data, loading, error, refetch } = useApiResource("map-view", getMapViewData);
  const [cf, setCf] = useState<CF>("all");
  const [active, setActive] = useState<string | null>(null);
  const [tip, setTip] = useState<{ name: string; box: { left: number; top: number; width: number; height: number }; vw: number; vh: number } | null>(null);
  /** Provinsi yang diketuk — dipakai di mobile karena tidak ada hover. */
  const [picked, setPicked] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isNarrow = useIsMobile(1024);

  const provinceData = data?.provinceData ?? {};
  const legend = data?.legend ?? [];
  const clusterName = data?.clusterName ?? {};
  const clusterColor = data?.clusterColor ?? {};
  const clusterCount = data?.clusterCount ?? 0;

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    Object.values(provinceData).forEach((r) => { c[r.cluster] = (c[r.cluster] ?? 0) + 1; });
    return c;
  }, [provinceData]);

  // Drill-down dari Profil Kluster: set filter cluster & sorot provinsi tujuan.
  useEffect(() => {
    if (focusCluster) setCf(focusCluster as CF);
  }, [focusCluster]);

  useEffect(() => {
    if (!focusProvince) return;
    setActive(focusProvince);
    setTip(null);
  }, [focusProvince]);

  if (loading) return <StatePage><LoadingState label="Memuat peta sebaran kluster…" /></StatePage>;
  if (error) return <StatePage><ErrorState message={error} onRetry={refetch} /></StatePage>;
  if (!data || legend.length === 0) {
    return <StatePage><EmptyState label="Data peta belum tersedia." /></StatePage>;
  }

  const PROVINCE_DATA = provinceData;
  const LEGEND = legend;
  const hov = tip ? PROVINCE_DATA[tip.name] : null;
  const hover = (
    name: string,
    box: { left: number; top: number; width: number; height: number },
  ) => setTip({ name, box, vw: window.innerWidth, vh: window.innerHeight });
  const leave = () => setTip(null);

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
      {/* Filter kluster — grid 2 kolom di mobile (semua chip terlihat, tanpa digeser) */}
      <div className="chip-scroll"
        style={{ background: "rgba(0,15,46,0.45)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderRadius: 14, padding: 6, border: "1px solid rgba(151,202,219,0.14)" }}>
          {([{ key: "all", label: "Semua" }, ...LEGEND] as const).map((item) => {
            const active = cf === item.key;
            const isAll = item.key === "all";
            return (
              <button key={item.key} onClick={() => setCf(item.key as CF)}
                aria-pressed={active}
                className={isAll ? "chip-all" : undefined}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  padding: "9px 10px", minHeight: 38,
                  borderRadius: 10, fontSize: 12.5, fontWeight: active ? 600 : 500,
                  fontFamily: "Plus Jakarta Sans, sans-serif", boxSizing: "border-box",
                  background: active ? "rgba(1,138,190,0.32)" : "rgba(151,202,219,0.05)",
                  color: active ? "#ffffff" : "rgba(151,202,219,0.85)",
                  border: active ? "1px solid rgba(63,189,235,0.55)" : "1px solid rgba(151,202,219,0.12)",
                  boxShadow: active ? "0 0 0 1px rgba(63,189,235,0.18) inset" : "none",
                  whiteSpace: "nowrap", cursor: "pointer",
                  transition: "background 180ms ease, border-color 180ms ease, color 180ms ease",
                }}>
                {"color" in item && <span style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0, boxShadow: active ? "0 0 0 2px rgba(255,255,255,0.15)" : "none" }}/>}
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>{item.label}</span>
              </button>
            );
          })}
      </div>

      {/* Map */}
      <Card glass={false} style={{ overflow: "hidden", position: "relative" }}>
        <div ref={mapRef} className="map-frame">
          <IndonesiaMap cf={cf} data={PROVINCE_DATA} activeName={tip?.name ?? picked ?? active}
            onHover={hover} onLeave={leave} onSelect={(name) => setPicked((p) => (p === name ? null : name))} />
          {/* Tooltip hanya di pointer-device; mobile memakai panel detail di bawah. */}
          {!isNarrow && tip && hov && (
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

        {/* Mobile: detail provinsi sebagai panel di bawah peta (tooltip hover tak jalan di sentuh) */}
        {isNarrow && picked && PROVINCE_DATA[picked] && (
          <div
            className="map-detail"
            style={{
              margin: "0 12px 12px", padding: 14, borderRadius: 14,
              background: "rgba(0,15,46,0.92)", border: "1px solid rgba(151,202,219,0.2)",
              display: "flex", alignItems: "stretch", gap: 12, boxSizing: "border-box",
            }}
          >
            <div style={{ minWidth: 0, flex: "1 1 auto", minHeight: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "white", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: 1.3, overflowWrap: "break-word" }}>{picked}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: clusterColor[PROVINCE_DATA[picked].cluster], flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: 1.4, minWidth: 0, overflowWrap: "break-word" }}>
                  Cluster {PROVINCE_DATA[picked].cluster} · {clusterName[PROVINCE_DATA[picked].cluster]}
                </span>
              </div>
              <div style={{ marginTop: 10 }}>
                {PROVINCE_DATA[picked].produksi || PROVINCE_DATA[picked].luas || PROVINCE_DATA[picked].produktivitas ? (
                  ([["Produksi", PROVINCE_DATA[picked].produksi], ["Luas Panen", PROVINCE_DATA[picked].luas], ["Produktivitas", PROVINCE_DATA[picked].produktivitas]] as const).map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
                      <span style={{ fontSize: 12, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif", flexShrink: 0 }}>{k}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "white", fontFamily: "Plus Jakarta Sans, sans-serif", textAlign: "right", minWidth: 0, overflowWrap: "break-word" }}>{v}</span>
                    </div>
                  ))
                ) : (
                  <div style={{ fontSize: 11, color: "rgba(151,202,219,0.87)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Detail data belum tersedia</div>
                )}
              </div>
            </div>
            {/* X pakai SVG + wrapper centering agar glyph selalu presisi di tengah kotak */}
            <button
              onClick={() => setPicked(null)}
              aria-label="Tutup detail provinsi"
              style={{
                flex: "0 0 28px", width: 28, height: 28, alignSelf: "flex-start",
                margin: 0, padding: 0, borderRadius: 8, cursor: "pointer",
                background: "rgba(151,202,219,0.08)", border: "1px solid rgba(151,202,219,0.16)",
                color: "#D6E8EE", display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: 0, boxSizing: "border-box",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ display: "block" }}>
                <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card style={{ padding: isNarrow ? 16 : 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 16 }}>Ringkasan Kluster</h3>
          <div className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${isNarrow ? 2 : Math.min(clusterCount, 4)}, minmax(0, 1fr))` }}>
            {LEGEND.map(l => {
              const count = counts[l.key] ?? 0;
              return (
                <div key={l.key} style={{ background: `${l.color}15`, borderRadius: 12, padding: "16px 12px", textAlign: "center", border: `1px solid ${l.color}33` }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: l.color, lineHeight: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{count}</div>
                  <div style={{ fontSize: 10, color: "rgba(151,202,219,0.87)", marginTop: 4, fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: 1.4 }}>
                    Cluster {l.key}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card style={{ padding: isNarrow ? 16 : 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif", marginBottom: 10 }}>Keterangan</h3>
          <p style={{ fontSize: 13, color: "#97CADB", lineHeight: 1.7, marginBottom: 16, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Peta menampilkan distribusi kluster pertanian Indonesia berdasarkan produksi komoditas menggunakan K-Means (K={clusterCount}). Provinsi tanpa data tampil samar.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {LEGEND.map(l => (
              <div key={l.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: l.color, flexShrink: 0 }}/>
                <span style={{ fontSize: 12, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  <span style={{ fontWeight: 700 }}>Cluster {l.key}</span> - {clusterName[l.key]}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}