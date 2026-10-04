/**
 * Hook generik untuk mengambil data API dengan:
 * - loading state
 * - error handling
 * - cache in-memory (mencegah request berulang tanpa alasan)
 * - refetch manual
 *
 * `key` = identitas request. Bila `null`, request tidak dijalankan
 * (berguna untuk request yang bergantung pada pilihan pengguna).
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { clearApiCache } from "../services/api";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface ApiResource<T> extends AsyncState<T> {
  refetch: () => void;
}

/** Hasil yang sudah pernah diambil, dibagi antar komponen selama sesi berjalan. */
const resultCache = new Map<string, unknown>();

export function useApiResource<T>(
  key: string | null,
  fetcher: () => Promise<T>,
  options: { enabled?: boolean } = {},
): ApiResource<T> {
  const enabled = options.enabled ?? true;
  const active = Boolean(key) && enabled;

  // Simpan fetcher terbaru agar efek tidak perlu dijalankan ulang tiap render.
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const [state, setState] = useState<AsyncState<T>>(() => {
    if (key && resultCache.has(key)) {
      return { data: resultCache.get(key) as T, loading: false, error: null };
    }
    return { data: null, loading: active, error: null };
  });
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (!key || !enabled) return;

    if (resultCache.has(key)) {
      setState({ data: resultCache.get(key) as T, loading: false, error: null });
      return;
    }

    let cancelled = false;
    setState((prev) => ({ data: prev.data, loading: true, error: null }));

    fetcherRef
      .current()
      .then((res) => {
        resultCache.set(key, res);
        if (!cancelled) setState({ data: res, loading: false, error: null });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : "Terjadi kesalahan yang tidak diketahui.",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [key, enabled, nonce]);

  const refetch = useCallback(() => {
    if (key) resultCache.delete(key);
    clearApiCache();
    setNonce((n) => n + 1);
  }, [key]);

  return { ...state, refetch };
}
