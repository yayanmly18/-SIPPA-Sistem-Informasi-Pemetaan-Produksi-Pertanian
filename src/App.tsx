import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import SplashScreen from "./components/SplashScreen";
import useIsMobile from "./hooks/useIsMobile";
import OverviewPage from "./pages/OverviewPage";
import ProfileClusterPage from "./pages/ProfileClusterPage";
import MapPage from "./pages/MapPage";
import ProvinceDetailPage from "./pages/ProvinceDetailPage";
import ModelEvalPage from "./pages/ModelEvalPage";

export type Page = "overview" | "map" | "profile-cluster" | "province-detail" | "model-eval";

const PAGE_META: Record<Page, { title: string; breadcrumb: string }> = {
  "overview":        { title: "Overview",              breadcrumb: "Dashboard / Overview" },
  "map":             { title: "Peta Sebaran Kluster",  breadcrumb: "Dashboard / Peta Kluster" },
  "profile-cluster": { title: "Profil Kluster",        breadcrumb: "Dashboard / Profil Kluster" },
  "province-detail": { title: "Detail Provinsi",       breadcrumb: "Dashboard / Detail Provinsi" },
  "model-eval":      { title: "Evaluasi Model",        breadcrumb: "Dashboard / Evaluasi Model" },
};

const ORDER: Page[] = ["overview", "map", "profile-cluster", "province-detail", "model-eval"];
const YEARS = [2024, 2025, 2026];
const PAGE_NAV: Record<Page, number> = { "overview": 0, "map": 1, "profile-cluster": 2, "province-detail": 3, "model-eval": 4 };
const ROUTE_TO_PAGE: Record<string, Page> = {
  "overview": "overview", "map": "map",
  "profile-cluster": "profile-cluster", "province-detail": "province-detail", "model-eval": "model-eval",
};

/** Lightweight hash-based router — works on any static host (no server rewrites),
 * keeps the page on refresh, and enables browser back/forward. */
function useHashRoute(): [Page, (p: Page) => void] {
  const read = () => {
    const h = window.location.hash.replace(/^#\/?/, "").split("?")[0];
    return ROUTE_TO_PAGE[h] ?? ORDER[0];
  };

  const [page, setPage] = useState<Page>(read);

  useEffect(() => {
    const onHash = () => setPage(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = (p: Page) => {
    if (read() !== p) window.location.hash = `/${p}`;
    setPage(p);
  };

  return [page, navigate];
}

const navItems = [
  { id: 0, label: "Overview" },
  { id: 1, label: "Peta Kluster" },
  { id: 2, label: "Profil Kluster" },
  { id: 3, label: "Detail Provinsi" },
  { id: 4, label: "Evaluasi Model" },
];

function renderPage(page: Page) {
  switch (page) {
    case "overview":        return <OverviewPage />;
    case "map":             return <MapPage />;
    case "profile-cluster": return <ProfileClusterPage />;
    case "province-detail": return <ProvinceDetailPage />;
    case "model-eval":      return <ModelEvalPage />;
  }
}

export default function App() {
  const [page, navigate] = useHashRoute();
  const meta = PAGE_META[page];
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Year filter — user can freely pick a data year.
  const [year, setYear] = useState<number>(2026);
  const [yearOpen, setYearOpen] = useState(false);

  // Splash shown on every fresh load / refresh, then fades into the app.
  const [splashLeaving, setSplashLeaving] = useState(false);
  const [splashGone, setSplashGone] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setSplashLeaving(true), 2200);
    const t2 = setTimeout(() => setSplashGone(true), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Page transition: fade the previous page out while the new one slides in.
  const [displayed, setDisplayed] = useState<Page>(page);
  const [exiting, setExiting] = useState<Page | null>(null);
  const prevRef = useRef<Page>(page);
  useEffect(() => {
    const prev = prevRef.current;
    if (prev === page) return;
    prevRef.current = page;
    setExiting(prev);
    setDisplayed(page);
    const t = setTimeout(() => setExiting(null), 260);
    return () => clearTimeout(t);
  }, [page]);

  const handleNav = (id: number) => { navigate(ORDER[id] ?? "overview"); setDrawerOpen(false); };

  return (
    <div className="flex h-full" style={{ background: "linear-gradient(135deg, #001B48 0%, #02457A 55%, #018ABE 100%)" }}>
      {splashGone ? null : (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            opacity: splashLeaving ? 0 : 1,
            transition: "opacity 650ms ease",
            pointerEvents: splashLeaving ? "none" : "auto",
          }}
        >
          <SplashScreen leaving={splashLeaving} />
        </div>
      )}

      {isMobile && drawerOpen && (
        <>
          <div onClick={() => setDrawerOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(0,5,20,0.55)" }} />
          <div style={{ position: "fixed", top: 0, bottom: 0, left: 0, zIndex: 61, animation: "drawerIn 220ms cubic-bezier(0.2,0.8,0.2,1) both" }}>
            <Sidebar activeNav={PAGE_NAV[displayed]} navItems={navItems} onNav={handleNav} />
          </div>
        </>
      )}
      {!isMobile && <Sidebar activeNav={PAGE_NAV[displayed]} navItems={navItems} onNav={handleNav} />}

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="shrink-0 flex items-center justify-between px-4 md:px-7 h-[56px]"
          style={{ position: "relative", zIndex: 40, background: "linear-gradient(90deg, rgba(0,27,72,0.4) 0%, rgba(2,69,122,0.28) 55%, rgba(1,138,190,0.18) 100%)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid rgba(151,202,219,0.08)", boxShadow: "none" }}>
          <div className="flex items-center gap-2">
            {isMobile && (
              <button onClick={() => setDrawerOpen(true)} aria-label="Buka menu"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, marginRight: 4, borderRadius: 8, background: "rgba(151,202,219,0.08)", border: "1px solid rgba(151,202,219,0.16)", color: "#D6E8EE", cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            )}
            <span className="text-[12px]" style={{ color: "#97CADB" }}>{meta.breadcrumb.split(" / ")[0]}</span>
            <span style={{ color: "rgba(151,202,219,0.68)", fontSize: 12 }}>/</span>
            <span className="text-[13px] font-semibold" style={{ color: "#ffffff" }}>{meta.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setYearOpen(!yearOpen)}
                className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-[12px] font-medium"
                style={{
                  background: yearOpen ? "rgba(1,138,190,0.22)" : "rgba(151,202,219,0.07)",
                  border: `1px solid ${yearOpen ? "rgba(1,138,190,0.55)" : "rgba(151,202,219,0.14)"}`,
                  color: "#D6E8EE",
                  cursor: "pointer",
                  boxShadow: yearOpen ? "0 0 0 3px rgba(1,138,190,0.18)" : "none",
                  transition: "background 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="2" width="11" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 5h11M4.5 1v2M8.5 1v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Tahun {year}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform 200ms cubic-bezier(0.2,0.8,0.2,1)", transform: yearOpen ? "rotate(180deg)" : "none" }}>
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </button>

              {yearOpen && (
                <>
                  <div style={{ position: "fixed", inset: 0, zIndex: 19 }} onClick={() => setYearOpen(false)} />
                  <div className="year-menu" style={{ position: "absolute", right: 0, top: "calc(100% + 8px)", width: 172, zIndex: 20, background: "#00142E", border: "1px solid rgba(151,202,219,0.18)", borderRadius: 14, boxShadow: "0 16px 40px rgba(0,5,20,0.55)", overflow: "hidden", padding: 6 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(151,202,219,0.6)", padding: "6px 10px 8px", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      Pilih Tahun Data
                    </div>
                    {YEARS.map(y => {
                      const active = year === y;
                      return (
                        <button
                          key={y}
                          onClick={() => { setYear(y); setYearOpen(false); }}
                          onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(1,138,190,0.14)"; }}
                          onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left",
                            padding: "9px 12px", fontSize: 13, fontFamily: "Plus Jakarta Sans, sans-serif", cursor: "pointer",
                            background: active ? "linear-gradient(90deg, rgba(1,138,190,0.35), rgba(1,138,190,0.12))" : "transparent",
                            color: active ? "#ffffff" : "rgba(214,232,238,0.88)",
                            fontWeight: active ? 700 : 500,
                            border: "none", borderRadius: 9,
                          }}
                        >
                          <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                            <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: active ? "#3FBDEB" : "rgba(151,202,219,0.25)", boxShadow: active ? "0 0 8px rgba(63,189,235,0.8)" : "none" }}/>
                            {y}
                            {active && <span style={{ fontSize: 10, fontWeight: 600, color: "#97CADB", background: "rgba(1,138,190,0.3)", border: "1px solid rgba(1,138,190,0.5)", borderRadius: 20, padding: "1px 8px" }}>Aktif</span>}
                          </span>
                          {active && (
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <path d="M2.5 6.8l2.6 2.6L10.5 4" stroke="#3FBDEB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto relative">
          <div key={displayed} className="page-enter">
            {renderPage(displayed)}
          </div>
          {exiting && (
            <div key={`exit-${exiting}`} className="page-exit absolute inset-0 z-10 overflow-auto">
              {renderPage(exiting)}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
