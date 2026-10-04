/**
 * Tipe data yang mencerminkan struktur JSON response backend SIPPA.
 *
 * Sumber: routes/api.php + app/Http/Controllers/Api/*Controller.php pada
 * repository https://github.com/KenzArz/sippa-backend
 *
 * Catatan: nilai numerik (produksi, skor, dll) dikirim backend sebagai STRING
 * karena kolom DECIMAL, sedangkan kolom bilangan bulat dikirim sebagai NUMBER.
 */

/** Nilai yang mungkin berupa number atau string (DECIMAL dari backend). */
export type Numeric = number | string | null;

/** GET /api/clusters/summary */
export interface ClusterSummary {
  cluster_number: number;
  name: string;
  jumlah_provinsi: number;
  karakteristik: string;
}

/** GET /api/clusters */
export interface ClusterListItem extends ClusterSummary {
  id: string;
  created_at?: string;
  updated_at?: string;
  provinces: ProvinceMini[];
}

export interface ProvinceMini {
  id: string;
  name: string;
  cluster_id: string;
  total_production?: Numeric;
}

/** Referensi komoditas yang selalu di-eager-load. */
export interface CommodityRef {
  id: string;
  slug: string;
  display_name: string;
  category: string;
  reference_year?: number;
}

/** GET /api/clusters/{id} → commodity_profiles[] */
export interface CommodityProfile {
  id: string;
  cluster_id: string;
  commodity_id: string;
  median_produksi: Numeric;
  mean_z_score: Numeric;
  commodity: CommodityRef;
}

/** GET /api/clusters/{id} */
export interface ClusterDetail extends ClusterSummary {
  id: string;
  provinces: ProvinceMini[];
  commodity_profiles: CommodityProfile[];
}

export interface ProvinceClusterRef {
  id: string;
  cluster_number: number;
  name: string;
  karakteristik?: string;
}

/** GET /api/provinces */
export interface ProvinceListItem {
  id: string;
  name: string;
  cluster_id: string;
  geo_alias: string | null;
  total_production: Numeric;
  cluster: ProvinceClusterRef;
}

/** GET /api/provinces/map-data */
export interface ProvinceMapDatum {
  id: string;
  name: string;
  geo_alias: string | null;
  cluster_number: number;
  cluster_name: string;
  total_production: Numeric;
}

/** GET /api/provinces/{id} → commodity_productions[] */
export interface ProvinceProduction {
  id: string;
  province_id: string;
  commodity_id: string;
  produksi: Numeric;
  luas_panen: Numeric;
  produktivitas: Numeric;
  median_cluster: Numeric;
  selisih_dengan_median_cluster: Numeric;
  commodity: CommodityRef;
}

/** GET /api/provinces/{id} */
export interface ProvinceDetail {
  id: string;
  name: string;
  cluster_id: string;
  geo_alias: string | null;
  total_production: Numeric;
  cluster: ProvinceClusterRef;
  commodity_productions: ProvinceProduction[];
}

/** GET /api/provinces/{id}/commodity-comparison */
export interface CommodityComparisonRow {
  commodity_id: string;
  produksi: Numeric;
  median_cluster: Numeric;
  selisih_dengan_median_cluster: Numeric;
  commodity: CommodityRef;
}

/** GET /api/commodities */
export interface Commodity {
  id: string;
  slug: string;
  display_name: string;
  category: string;
  reference_year?: number;
}

/** GET /api/commodities/categories */
export interface CommodityCategory {
  category: string;
  count: number;
}

/** GET /api/model-evaluation/kmeans */
export interface KmeansEvaluation {
  id: string;
  k: number;
  inertia: string;
  silhouette_score: string;
  davies_bouldin_index: string;
  smallest_cluster: number;
  largest_cluster: number;
}

/** GET /api/model-evaluation/pca */
export interface PcaVariance {
  id: string;
  component: number;
  explained_variance: string;
  cumulative_variance: string;
}

/** GET /api/model-evaluation */
export interface ModelEvaluation {
  kmeans: {
    evaluations: KmeansEvaluation[];
    chosen_k: number;
    chosen_k_metrics: KmeansEvaluation | null;
    chosen_k_note: string;
    statistical_best_k: number | null;
    statistical_best_silhouette: string | null;
  };
  pca: {
    variances: PcaVariance[];
    components_for_90_percent: number | null;
    total_components: number;
  };
}
