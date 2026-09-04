/** Data Profil Kluster — di-generate dari data-resource/ (npm run import-data). */
import raw from "./generated/profileCluster.json";

export type ClusterKey = string;

export const CLUSTER_CARDS: Array<{
  key: ClusterKey;
  title: string;
  desc: string;
  stats: { label: string; val: number; dec: number; unit: string }[];
}> = raw.CLUSTER_CARDS;

export const RADAR_DATA: Record<string, number | string>[] = raw.RADAR_DATA;
export const RADAR_SERIES: { key: string; name: string; color: string }[] = raw.RADAR_SERIES;
export const DOM_TABLE: { key: ClusterKey; komoditas: string }[] = raw.DOM_TABLE;
export const TABLE_STATS: { key: ClusterKey; provinsi: number; produksi: string; luas: string; prod: string; kom: string }[] = raw.TABLE_STATS;
export const PROVINCE_TABS: Array<{ key: ClusterKey; label: string; title: string; sub: string; count: number; pct: number; provinces: string[] }> = raw.PROVINCE_TABS;


