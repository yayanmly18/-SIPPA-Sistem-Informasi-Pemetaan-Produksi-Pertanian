/** Service endpoint /api/commodities — lihat API_DOCUMENTATION.md backend. */
import { apiGetCached } from "./api";
import type { Commodity } from "../types/api";

/** GET /api/commodities?category=&year= */
export const getCommodities = (params?: { category?: string; year?: number }) =>
  apiGetCached<Commodity[]>(
    `/commodities${params?.category ? `?category=${encodeURIComponent(params.category)}` : ""}${
      params?.year ? `${params?.category ? "&" : "?"}year=${params.year}` : ""
    }`,
  );
