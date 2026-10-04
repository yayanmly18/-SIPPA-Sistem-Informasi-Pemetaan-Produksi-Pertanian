/** Service endpoint /api/provinces — lihat API_DOCUMENTATION.md. */
import { apiGetCached } from "./api";
import type {
  CommodityComparisonRow,
  ProvinceDetail,
  ProvinceListItem,
  ProvinceMapDatum,
  ProvinceProduction,
} from "../types/api";

/** GET /api/provinces — daftar provinsi + info cluster. */
export const getProvinces = () => apiGetCached<ProvinceListItem[]>("/provinces");

/** GET /api/provinces/map-data — data ringkas untuk visualisasi peta. */
export const getProvinceMapData = () => apiGetCached<ProvinceMapDatum[]>("/provinces/map-data");

/** GET /api/provinces/{id} — detail provinsi + produksi komoditas. */
export const getProvinceDetail = (id: string) => apiGetCached<ProvinceDetail>(`/provinces/${id}`);

/** GET /api/provinces/{id}/top-commodities?limit=n */
export const getProvinceTopCommodities = (id: string, limit = 10) =>
  apiGetCached<ProvinceProduction[]>(`/provinces/${id}/top-commodities?limit=${limit}`);

/** GET /api/provinces/{id}/commodity-comparison — perbandingan vs median cluster. */
export const getProvinceComparison = (id: string) =>
  apiGetCached<CommodityComparisonRow[]>(`/provinces/${id}/commodity-comparison`);

/**
 * Detail seluruh provinsi — dipakai untuk agregasi produksi nasional per tahun.
 * Setiap provinsi di-cache individual, jadi halaman Detail Provinsi memakainya lagi
 * tanpa request tambahan.
 */
export const getAllProvinceDetails = async (): Promise<ProvinceDetail[]> => {
  const provinces = await getProvinces();
  return Promise.all(provinces.map((p) => getProvinceDetail(p.id)));
};
