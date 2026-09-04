/** Data Evaluasi Model — di-generate dari data-resource/ML_OUTPUT/Evaluasi_KMeans.csv. */
import raw from "./generated/modelEval.json";

type MetricRow = { k: number; v: number };

export const BEST_K: number = raw.BEST_K;
export const ELBOW: MetricRow[] = raw.ELBOW;
export const SIL: MetricRow[] = raw.SIL;
export const DBI: MetricRow[] = raw.DBI;
export const TABLE: { k: string; sil: string; dbi: string; inertia: string; sel: boolean }[] = raw.TABLE;
export const TOP: { label: string; value: number; dec: number; unit: string; color: string; pct?: number }[] = raw.TOP;
export const METRIC_CHARTS: { title: string; data: MetricRow[]; color: string; label: string }[] = raw.METRIC_CHARTS;
export const PCA: { component: number; explained: number; cumulative: number }[] = raw.PCA;


