import idGeo from "../data/id.json";

type Cluster = "1" | "2" | "3";
export type ProvinceRow = {
  cluster: Cluster;
  produksi?: string;
  luas?: string;
  produktivitas?: string;
};
export type CF = "all" | Cluster;

const CLUSTER_COLOR: Record<Cluster, string> = { "1": "#10b981", "2": "#f59e0b", "3": "#f87171" };
const DIM = "rgba(255,255,255,0.1)";
const DEFAULT_FILL = "rgba(1,138,190,0.25)";

type Feature = {
  geometry: { type: "Polygon" | "MultiPolygon"; coordinates: any };
  properties: { state?: string };
};

/** Flatten every coordinate to compute the map bounding box. */
function computeBounds(features: Feature[]) {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  const walk = (coords: any) => {
    if (!Array.isArray(coords)) return;
    // A ring is an array of [lon, lat] points → coords[0] is a point, so coords[0][0] is a number.
    // A polygon is an array of rings → coords[0] is an array, coords[0][0] is an array.
    if (typeof coords[0]?.[0] === "number") {
      for (const [lon, lat] of coords) {
        if (typeof lon === "number" && typeof lat === "number") {
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
        }
      }
      return;
    }
    for (const child of coords) walk(child);
  };
  for (const f of features) walk(f.geometry.coordinates);
  return { minLon, maxLon, minLat, maxLat };
}

const B = computeBounds((idGeo as any).features as Feature[]);
const PAD = 14;
const MAP_W = 1000;
const MAP_H = (MAP_W * (B.maxLat - B.minLat)) / (B.maxLon - B.minLon);
const VB_W = MAP_W + PAD * 2;
const VB_H = MAP_H + PAD * 2;

const X = (lon: number) => PAD + ((lon - B.minLon) / (B.maxLon - B.minLon)) * MAP_W;
const Y = (lat: number) => PAD + ((B.maxLat - lat) / (B.maxLat - B.minLat)) * MAP_H;

function ringToPath(coords: number[][]): string {
  let d = "";
  coords.forEach(([lon, lat], i) => {
    d += `${i === 0 ? "M" : "L"}${X(lon).toFixed(1)},${Y(lat).toFixed(1)}`;
  });
  return d + "Z";
}

/** A polygon = array of rings (outer ring first, then holes). Emit each as a subpath. */
function polygonToPath(poly: any): string {
  return poly.map(ringToPath).join("");
}

function featureToPath(f: Feature): string {
  const coords = f.geometry.coordinates;
  if (f.geometry.type === "MultiPolygon") {
    // Each element is a polygon (array of rings).
    return coords.map(polygonToPath).join("");
  }
  // Polygon type: coords is already an array of rings.
  return coords.map(polygonToPath).join("");
}

function colorFor(name: string, cf: CF, data: Record<string, ProvinceRow>): string {
  const row = data[name];
  if (!row) return DEFAULT_FILL;
  if (cf !== "all" && row.cluster !== cf) return DIM;
  return CLUSTER_COLOR[row.cluster];
}

type Props = {
  cf: CF;
  data: Record<string, ProvinceRow>;
  activeName?: string | null;
  onHover: (
    name: string,
    box: { left: number; top: number; width: number; height: number },
    e: React.MouseEvent,
  ) => void;
  onLeave: () => void;
};

function regionBox(e: React.MouseEvent): { left: number; top: number; width: number; height: number } {
  const r = (e.currentTarget as SVGGraphicsElement).getBoundingClientRect();
  return { left: r.left, top: r.top, width: r.width, height: r.height };
}

export default function IndonesiaMap({ cf, data, activeName, onHover, onLeave }: Props) {
  const shapes = (idGeo as any).features;

  if (!shapes || shapes.length === 0) {
    return <div style={{ padding: 24, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 13 }}>Data peta tidak tersedia.</div>;
  }

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      width={VB_W}
      height={VB_H}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Peta sebaran kluster Indonesia"
      style={{ display: "block", maxWidth: "100%", height: "auto", margin: "0 auto" }}
    >
      {shapes.map((f: Feature, i: number) => {
        const name = f.properties.state ?? `Provinsi ${i}`;
        let d = "";
        try {
          d = featureToPath(f);
        } catch {
          d = "";
        }
        const hasData = Boolean(data[name]);
        const isActive = activeName === name;
        const fill = hasData ? colorFor(name, cf, data) : "rgba(1,138,190,0.12)";
        return (
          <path
            key={i}
            d={d}
            fill={fill}
            stroke={isActive ? "rgba(255,255,255,0.95)" : hasData ? "rgba(255,255,255,0.6)" : "rgba(151,202,219,0.25)"}
            strokeWidth={isActive ? 1.4 : 0.8}
            style={{
              cursor: hasData ? "pointer" : "default",
              transition: "fill 200ms, filter 200ms",
              filter: isActive ? "brightness(0.7) saturate(1.25)" : undefined,
            }}
            onMouseEnter={(e) => hasData && onHover(name, regionBox(e), e)}
            onMouseMove={(e) => hasData && onHover(name, regionBox(e), e)}
            onMouseLeave={onLeave}
          />
        );
      })}
    </svg>
  );
}