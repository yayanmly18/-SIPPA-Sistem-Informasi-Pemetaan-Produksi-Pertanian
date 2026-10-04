/**
 * Konfigurasi API terpusat untuk SIPPA.
 *
 * - Base URL diambil dari environment variable Vite `VITE_API_URL` (lihat `.env`).
 * - Fallback ke endpoint publik agar aplikasi tetap jalan walau `.env` belum dibuat.
 * - Semua response backend dibungkus amplop: { success: boolean, data: T, message?: string }.
 */
import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export const API_BASE_URL: string = String(
  import.meta.env.VITE_API_URL || "http://70.153.80.149/api",
).replace(/\/+$/, "");

/** Amplop response standar backend Laravel SIPPA. */
export interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  message?: string;
}

/** Error yang sudah dinormalisasi supaya pesannya ramah untuk UI. */
export class ApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export const http: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: { Accept: "application/json" },
});

function normalizeError(err: unknown): ApiError {
  if (axios.isAxiosError(err)) {
    const e = err as AxiosError<{ message?: string }>;
    if (e.code === "ECONNABORTED") {
      return new ApiError("Koneksi ke server API timeout. Silakan coba lagi.");
    }
    if (!e.response) {
      return new ApiError(
        `Tidak dapat terhubung ke server API (${API_BASE_URL}). Pastikan server berjalan dan dapat diakses.`,
      );
    }
    return new ApiError(
      e.response.data?.message ?? `Terjadi kesalahan pada server (HTTP ${e.response.status}).`,
      e.response.status,
    );
  }
  if (err instanceof ApiError) return err;
  return new ApiError(err instanceof Error ? err.message : "Terjadi kesalahan yang tidak diketahui.");
}

/** GET yang membuka amplop { success, data } dan menormalkan error. */
export async function apiGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const { data } = await http.get<ApiEnvelope<T>>(url, config);
    if (!data || data.success === false) {
      throw new ApiError(data?.message ?? "Permintaan API gagal.");
    }
    return data.data;
  } catch (err) {
    throw normalizeError(err);
  }
}

/* ------------------------------------------------------------------ *
 * Cache request-level.                                                *
 * Tujuan: mencegah request identik dipanggil berulang kali ketika     *
 * beberapa halaman membutuhkan data yang sama (mis. daftar provinsi). *
 * ------------------------------------------------------------------ */
const pending = new Map<string, Promise<unknown>>();

export function apiGetCached<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const existing = pending.get(url) as Promise<T> | undefined;
  if (existing) return existing;

  const promise = apiGet<T>(url, config).catch((err) => {
    // Kegagalan tidak di-cache agar tombol "Coba Lagi" benar-benar request ulang.
    pending.delete(url);
    throw err;
  });
  pending.set(url, promise);
  return promise;
}

/** Bersihkan cache agar request berikutnya mengambil data terbaru. */
export function clearApiCache(): void {
  pending.clear();
}
