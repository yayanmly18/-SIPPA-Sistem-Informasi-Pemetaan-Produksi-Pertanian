/** Service endpoint /api/commodities — lihat API_DOCUMENTATION.md. */
import { apiGetCached } from "./api";
import type { Commodity, CommodityCategory, ProvinceProduction } from "../types/api";

/** GET /api/commodities?category=&year= */
export const getCommodities = (params?: { category?: string; year?: number }) =>
  apiGetCached<Commodity[]>(
    `/commodities${params?.category ? `?category=${encodeURIComponent(params.category)}` : ""}${
      params?.year ? `${params?.category ? "&" : "?"}year=${params.year}` : ""
    }`,
  );

/** GET /api/commodities/categories — daftar kategori + jumlah komoditas. */
export const getCommodityCategories = () => apiGetCached<CommodityCategory[]>("/commodities/categories");

/** GET /api/commodities/{id}/top-provinces?limit=n */
export const getCommodityTopProvinces = (id: string, limit = 10) =>
  apiGetCached<ProvinceProduction[]>(`/commodities/${id}/top-provinces?limit=${limit}`);
