import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import SplashScreen from "./components/SplashScreen";
import useIsMobile from "./hooks/useIsMobile";
import OverviewPage from "./pages/OverviewPage";
import ProfileClusterPage from "./pages/ProfileClusterPage";
import MapPage from "./pages/MapPage";
import ProvinceDetailPage from "./pages/ProvinceDetailPage";
import ModelEvalPage from "./pages/ModelEvalPage";
import LandingPage from "./pages/LandingPage";

export type Page = "overview" | "map" | "profile-cluster" | "province-detail" | "model-eval";

const PAGE_META: Record<Page, { title: string; breadcrumb: string }> = {
  "overview":        { title: "Overview",              breadcrumb: "Dashboard / Overview" },
  "map":             { title: "Peta Sebaran Kluster",  breadcrumb: "Dashboard / Peta Kluster" },
  "profile-cluster": { title: "Profil Kluster",        breadcrumb: "Dashboard / Profil Kluster" },
  "province-detail": { title: "Detail Provinsi",       breadcrumb: "Dashboard / Detail Provinsi" },
  "model-eval":      { title: "Evaluasi Model",        breadcrumb: "Dashboard / Evaluasi Model" },
};

const ORDER: Page[] = ["overview", "map", "profile-cluster", "province-detail", "model-eval"];
const PAGE_NAV: Record<Page, number> = { "overview": 0, "map": 1, "profile-cluster": 2, "province-detail": 3, "model-eval": 4 };
const ROUTE_TO_PAGE: Record<string, Page> = {
  "overview": "overview", "map": "map",
  "profile-cluster": "profile-cluster", "province-detail": "province-detail", "model-eval": "model-eval",
};

/** Lightweight hash-based router — works on any static host (no server rewrites),
 * keeps the page on refresh, and enables browser back/forward.
 * Only "#/page" counts as a dashboard route; plain "#anchor" belongs to the landing. */
function readRouteHash(): Page {
  const raw = window.location.hash;
  if (raw.indexOf("#/") !== 0) return ORDER[0];
  const h = raw.replace(/^#\/?/, "").split("?")[0];
  return ROUTE_TO_PAGE[h] ?? ORDER[0];
}

function useHashRoute(): [Page, (p: Page) => void] {
  const [page, setPage] = useState<Page>(readRouteHash);

  useEffect(() => {
    const onHash = () => setPage(readRouteHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = (p: Page) => {
    if (readRouteHash() !== p) window.location.hash = `/${p}`;
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

/** Aksi drill-down: dari daftar anggota kluster ke halaman peta. */
export type GoToMap = (province: string, cluster: string) => void;
type MapFocus = { province: string; cluster: string } | null;

function renderPage(page: Page, onGoToMap: GoToMap, focus: MapFocus) {
  switch (page) {
    case "overview":        return <OverviewPage />;
    case "map":             return <MapPage focusProvince={focus?.province ?? null} focusCluster={focus?.cluster ?? null} />;
    case "profile-cluster": return <ProfileClusterPage onGoToMap={onGoToMap} />;
    case "province-detail": return <ProvinceDetailPage />;
    case "model-eval":      return <ModelEvalPage />;
  }
}

export default function App() {
  const [page, navigate] = useHashRoute();
  const meta = PAGE_META[page];
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Drill-down: klik anggota kluster → Peta, dengan provinsi & cluster difokuskan.
  const [mapFocus, setMapFocus] = useState<MapFocus>(null);
  const goToMap: GoToMap = (province, cluster) => {
    setMapFocus({ province, cluster });
    navigate("map");
  };

  // Landing vs dashboard: website dimulai dari landing page (root), tombol masuk ke dashboard.
  // Hanya hash "#/halaman" yang dihitung; anchor landing seperti "#fitur" diabaikan.
  const hasRealPage = () => window.location.hash.indexOf("#/") === 0;
  const [entered, setEntered] = useState<boolean>(() => hasRealPage());
  useEffect(() => {
    const onHash = () => { if (hasRealPage()) setEntered(true); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const enterDashboard = () => {
    if (!window.location.hash) window.location.hash = "/overview";
    setEntered(true);
  };

  // Splash hanya ditampilkan saat masuk dashboard (dari landing atau buka langsung).
  const [splashLeaving, setSplashLeaving] = useState(false);
  const [splashGone, setSplashGone] = useState(true);
  const wasEntered = useRef<boolean | null>(null);
  useEffect(() => {
    if (wasEntered.current === entered) return;
    wasEntered.current = entered;
    if (!entered) {
      setSplashLeaving(false);
      setSplashGone(true);
      return;
    }
    setSplashLeaving(false);
    setSplashGone(false);
    const t1 = setTimeout(() => setSplashLeaving(true), 2200);
    const t2 = setTimeout(() => setSplashGone(true), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [entered]);

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
  const exitToLanding = () => {
    window.location.hash = "";
    setEntered(false);
    setDrawerOpen(false);
  };

  if (!entered) {
    return (
      <div className="h-full" style={{ background: "#001B48" }}>
        <LandingPage onEnter={enterDashboard} />
      </div>
    );
  }

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
            <Sidebar activeNav={PAGE_NAV[displayed]} navItems={navItems} onNav={handleNav} onExit={exitToLanding} />
          </div>
        </>
      )}
      {!isMobile && <Sidebar activeNav={PAGE_NAV[displayed]} navItems={navItems} onNav={handleNav} onExit={exitToLanding} />}

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
        </header>

        <main className="flex-1 overflow-auto relative">
          <div key={displayed} className="page-enter">
            {renderPage(displayed, goToMap, mapFocus)}
          </div>
          {exiting && (
            <div key={`exit-${exiting}`} className="page-exit absolute inset-0 z-10 overflow-auto">
              {renderPage(exiting, goToMap, mapFocus)}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
