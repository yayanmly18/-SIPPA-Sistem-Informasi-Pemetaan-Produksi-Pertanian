/** Komponen state bersama untuk halaman berbasis API: loading, error, dan kosong. */
import type { CSSProperties, ReactNode } from "react";
import { Card } from "./ui";

const wrap = (height: number): CSSProperties => ({
  minHeight: height,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  padding: 24,
  textAlign: "center",
});

export function LoadingState({ label = "Memuat data…", height = 300 }: { label?: string; height?: number }) {
  return (
    <Card style={wrap(height)}>
      <span className="spinner" aria-hidden />
      <span style={{ fontSize: 13, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{label}</span>
    </Card>
  );
}

export function ErrorState({ message, onRetry, height = 300 }: { message: string; onRetry?: () => void; height?: number }) {
  return (
    <Card style={wrap(height)}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <circle cx="15" cy="15" r="11.5" stroke="#f87171" strokeWidth="1.6" />
        <path d="M15 8.5v7.5M15 20.2h.02" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div style={{ maxWidth: 480 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", marginBottom: 4, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          Gagal memuat data
        </div>
        <div style={{ fontSize: 12.5, color: "#97CADB", lineHeight: 1.6, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{message}</div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            marginTop: 4,
            padding: "8px 18px",
            borderRadius: 10,
            fontSize: 12.5,
            fontWeight: 600,
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: "#ffffff",
            background: "rgba(1,138,190,0.35)",
            border: "1px solid rgba(1,138,190,0.6)",
            cursor: "pointer",
          }}
        >
          Coba Lagi
        </button>
      )}
    </Card>
  );
}

export function EmptyState({ label = "Data tidak tersedia.", height = 300 }: { label?: string; height?: number }) {
  return (
    <Card style={wrap(height)}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <path d="M4.5 9l10.5-4 10.5 4-10.5 4-10.5-4z" stroke="#97CADB" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4.5 9v11l10.5 4 10.5-4V9M15 13v11" stroke="#97CADB" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: 13, color: "#97CADB", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{label}</span>
    </Card>
  );
}

/** Bungkus state agar tampil dengan padding halaman yang konsisten. */
export function StatePage({ children }: { children: ReactNode }) {
  return <div className="p-4 md:p-7 flex flex-col gap-5">{children}</div>;
}
