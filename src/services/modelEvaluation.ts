/** Service endpoint /api/model-evaluation — lihat API_DOCUMENTATION.md backend. */
import { apiGetCached } from "./api";
import type { ModelEvaluation } from "../types/api";

/** GET /api/model-evaluation — ringkasan lengkap K-Means + PCA. */
export const getModelEvaluation = () => apiGetCached<ModelEvaluation>("/model-evaluation");
