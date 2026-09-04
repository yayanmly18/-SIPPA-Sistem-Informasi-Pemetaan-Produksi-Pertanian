/** Shared primitive components — dark blue glass theme */

import clusterMeta from "../data/generated/clusters.json";

function shade(hex: string, alpha: string) {
  return hex.startsWith("#") ? `${hex}${alpha}` : hex;
}

/** Meta cluster dinamis (mengikuti jumlah cluster hasil ML). */
export const CLUSTER: Record<string, { label: string; color: string; bg: string; border: string; text: string }> =
  Object.fromEntries(
    Object.entries(clusterMeta.colors as Record<string, string>).map(([key, color]) => [
      key,
      { label: (clusterMeta.names as Record<string, string>)[key] ?? "", color, bg: shade(color, "26"), border: shade(color, "55"), text: color },
    ]),
  );

export function ClusterBadge({ cluster }: { cluster: string }) {
  const c = CLUSTER[cluster] ?? { label: "", color: "#97CADB", bg: "rgba(151,202,219,0.15)", border: "rgba(151,202,219,0.3)", text: "#97CADB" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: c.bg, color: "#ffffff",
      fontSize: 11, fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif",
      padding: "3px 8px", borderRadius: 20,
      border: `1px solid ${c.border}`,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.color, flexShrink: 0 }}/>
      Cluster {cluster} · {c.label}
    </span>
  );
}

export function DarkTooltip({ active, payload, label, formatter }: {
  active?: boolean;
  payload?: any[];
  label?: string;
  formatter?: (val: number, name: string) => string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "rgba(0,15,46,0.95)",
      border: "1px solid rgba(151,202,219,0.2)",
      borderRadius: 10,
      padding: "10px 14px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
      minWidth: 120,
    }}>
      {label && <div style={{ color: "#97CADB", fontSize: 11, marginBottom: 6, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{label}</div>}
      {payload.map((p: any, i: number) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < payload.length - 1 ? 4 : 0 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.color ?? p.stroke ?? "#018ABE", flexShrink: 0, display: "inline-block" }}/>
          <span style={{ color: "white", fontSize: 13, fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            {formatter ? formatter(p.value, p.name) : p.value}
          </span>
          {payload.length > 1 && (
            <span style={{ color: "#97CADB", fontSize: 11, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{p.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function Card({ children, className = "", style = {}, glass = true }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** glass=false: no backdrop-blur — for cards containing SVG charts/maps,
   *  where blur layers cause white fringing artifacts in Chromium. */
  glass?: boolean;
}) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(151,202,219,0.06)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: ("blur(16px)" as any),
        borderRadius: 16,
        border: "1px solid rgba(151,202,219,0.14)",
        boxShadow: "0 8px 24px rgba(0,10,30,0.35)",
        transform: "translateZ(0)",
        isolation: "isolate",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, sub }: { children: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 style={{ fontSize: 14, fontWeight: 600, color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: 1.3 }}>
        {children}
      </h3>
      {sub && <p style={{ fontSize: 12, color: "#97CADB", marginTop: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{sub}</p>}
    </div>
  );
}

export const AXIS_STYLE = { fontSize: 11, fill: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" };
export const GRID_PROPS = { strokeDasharray: "0", stroke: "rgba(255,255,255,0.06)", vertical: false };
