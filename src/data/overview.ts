/** Data Overview — di-generate dari data-resource/ (npm run import-data). */
import raw from "./generated/overview.json";

export const stats: { provinces: number; clusters: number; commodities: number; period: string } = raw.stats;
export const pieData: { name: string; value: number; count: string; color: string }[] = raw.pieData;
export const komoditasTop: { name: string; ton: number; pct: number }[] = raw.komoditasTop;
export const clusterProd: { label: string; name: string; val: number; pct: number; color: string }[] = raw.clusterProd;
export const barColors: string[] = raw.barColors;


