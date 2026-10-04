/** Service endpoint /api/clusters — lihat API_DOCUMENTATION.md. */
import { apiGetCached } from "./api";
import type { ClusterDetail, ClusterListItem, ClusterSummary, CommodityProfile } from "../types/api";

/** GET /api/clusters — daftar cluster + provinsi anggotanya. */
export const getClusters = () => apiGetCached<ClusterListItem[]>("/clusters");

/** GET /api/clusters/summary — ringkasan cluster tanpa provinsi. */
export const getClusterSummary = () => apiGetCached<ClusterSummary[]>("/clusters/summary");

/** GET /api/clusters/{id} — detail cluster + profil komoditas. */
export const getClusterDetail = (id: string) => apiGetCached<ClusterDetail>(`/clusters/${id}`);

/** GET /api/clusters/{id}/top-commodities?limit=n */
export const getClusterTopCommodities = (id: string, limit = 10) =>
  apiGetCached<CommodityProfile[]>(`/clusters/${id}/top-commodities?limit=${limit}`);
