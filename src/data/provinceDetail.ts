/** Data Detail Provinsi — di-generate dari data-resource/ (npm run import-data). */
import raw from "./generated/provinceDetail.json";

export const PROVINCES: string[] = raw.PROVINCES;
export const PROVINCE_CLUSTER: Record<string, string> = raw.PROVINCE_CLUSTER;
export const PROVINCE_TOTAL: Record<string, number> = raw.PROVINCE_TOTAL;
export const KOM_DATA: { name: string; value: number }[] = raw.KOM_DATA;
export const CMP_DATA: { name: string; province: number; cluster: number }[] = raw.CMP_DATA;
export const PROD_BY_PROVINCE: Record<string, { m: string; v: number }[]> = raw.PROD_BY_PROVINCE;

/** Granularitas dropdown — statis (bukan dari CSV). */
export const GRANULARITY = ["Per Tahun", "Per Bulan", "Per Minggu"];
export type Granularity = "Per Tahun" | "Per Bulan" | "Per Minggu";

/** Data line chart per granularitas — statis (bukan dari CSV). */
export const LINE_BY_GRAN: Record<string, { m: string; v: number }[]> = {
  "Per Tahun": [
    { m: "2024", v: 4.2 },
    { m: "2025", v: 5.1 },
    { m: "2026", v: 5.8 },
  ],
  "Per Bulan": [
    { m: "Jan", v: 0.8 }, { m: "Feb", v: 0.9 }, { m: "Mar", v: 1.1 },
    { m: "Apr", v: 1.0 }, { m: "Mei", v: 1.2 }, { m: "Jun", v: 1.3 },
    { m: "Jul", v: 1.1 }, { m: "Agu", v: 1.0 }, { m: "Sep", v: 0.9 },
    { m: "Okt", v: 1.1 }, { m: "Nov", v: 1.2 }, { m: "Des", v: 1.4 },
  ],
  "Per Minggu": [
    { m: "M1", v: 0.2 }, { m: "M2", v: 0.25 }, { m: "M3", v: 0.3 },
    { m: "M4", v: 0.28 }, { m: "M5", v: 0.35 }, { m: "M6", v: 0.4 },
    { m: "M7", v: 0.38 }, { m: "M8", v: 0.32 }, { m: "M9", v: 0.3 },
    { m: "M10", v: 0.35 }, { m: "M11", v: 0.4 }, { m: "M12", v: 0.45 },
  ],
};

export const NAS = [
  { label:"Luas Wilayah",                 num:35.55, dec:2, unit:"² km",      color:"#018ABE", bg:"rgba(1,138,190,0.25)",  border:"rgba(1,138,190,0.45)"   },
  { label:"Jumlah Penduduk",              num:50,    dec:0, unit:" Juta Jiwa", color:"#a78bfa", bg:"rgba(167,139,250,0.2)", border:"rgba(167,139,250,0.4)"  },
  { label:"Kontribusi Nasional Produksi", num:16,    dec:0, unit:"%",          color:"#10b981", bg:"rgba(16,185,129,0.2)",  border:"rgba(16,185,129,0.4)"   },
];


