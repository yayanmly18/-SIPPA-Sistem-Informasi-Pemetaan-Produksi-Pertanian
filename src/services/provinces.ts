/** Service endpoint /api/provinces — lihat API_DOCUMENTATION.md backend. */
import { apiGetCached } from "./api";
import type {
  CommodityComparisonRow,
  ProvinceDetail,
  ProvinceListItem,
  ProvinceMapDatum,
} from "../types/api";

/** GET /api/provinces — daftar provinsi + info cluster. */
export const getProvinces = () => apiGetCached<ProvinceListItem[]>("/provinces");

/** GET /api/provinces/map-data — data ringkas untuk visualisasi peta. */
export const getProvinceMapData = () => apiGetCached<ProvinceMapDatum[]>("/provinces/map-data");

/** GET /api/provinces/{id} — detail provinsi + produksi komoditas. */
export const getProvinceDetail = (id: string) => apiGetCached<ProvinceDetail>(`/provinces/${id}`);

/** GET /api/provinces/{id}/commodity-comparison — perbandingan vs median cluster. */
export const getProvinceComparison = (id: string) =>
  apiGetCached<CommodityComparisonRow[]>(`/provinces/${id}/commodity-comparison`);

/**
 * Detail seluruh provinsi — dipakai untuk agregat nasional: total produksi,
 * komoditas teratas, serta luas panen & produktivitas pada tooltip peta.
 * Tiap provinsi di-cache individual sehingga tidak ada request berulang
 * saat berpindah halaman.
 */
export const getAllProvinceDetails = async (): Promise<ProvinceDetail[]> => {
  const provinces = await getProvinces();
  return Promise.all(provinces.map((p) => getProvinceDetail(p.id)));
};
