/** Data Peta Kluster — di-generate dari data-resource/ (npm run import-data). */
import raw from "./generated/map.json";
import meta from "./generated/clusters.json";
import type { ProvinceRow } from "../components/IndonesiaMap";

export const clusterCount: number = meta.count;
export const clusterColors: Record<string, string> = meta.colors;

export const PROVINCE_DATA = raw.PROVINCE_DATA as Record<string, ProvinceRow>;
export const LEGEND: { key: string; label: string; color: string }[] = raw.LEGEND;
export const clusterName: Record<string, string> = raw.clusterName;
export const clusterColor: Record<string, string> = raw.clusterColor;


