/** Service endpoint /api/clusters — lihat API_DOCUMENTATION.md backend. */
import { apiGetCached } from "./api";
import type { ClusterDetail, ClusterListItem, ClusterSummary } from "../types/api";

/** GET /api/clusters — daftar cluster + provinsi anggotanya. */
export const getClusters = () => apiGetCached<ClusterListItem[]>("/clusters");

/** GET /api/clusters/summary — ringkasan cluster tanpa provinsi. */
export const getClusterSummary = () => apiGetCached<ClusterSummary[]>("/clusters/summary");

/** GET /api/clusters/{id} — detail cluster + profil komoditas. */
export const getClusterDetail = (id: string) => apiGetCached<ClusterDetail>(`/clusters/${id}`);
