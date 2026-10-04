/** Service endpoint /api/model-evaluation — lihat API_DOCUMENTATION.md. */
import { apiGetCached } from "./api";
import type { KmeansEvaluation, ModelEvaluation, PcaVariance } from "../types/api";

/** GET /api/model-evaluation — ringkasan lengkap K-Means + PCA. */
export const getModelEvaluation = () => apiGetCached<ModelEvaluation>("/model-evaluation");

/** GET /api/model-evaluation/kmeans — evaluasi K-Means (K=2..8). */
export const getKmeansEvaluation = () => apiGetCached<KmeansEvaluation[]>("/model-evaluation/kmeans");

/** GET /api/model-evaluation/pca — variance explained per komponen. */
export const getPcaVariance = () => apiGetCached<PcaVariance[]>("/model-evaluation/pca");
