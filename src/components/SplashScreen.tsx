/** Full-screen animated splash shown once on app start / refresh. */
export default function SplashScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(150deg, #001128 0%, #003A66 45%, #018ABE 120%)",
        fontFamily: "Plus Jakarta Sans, sans-serif",
      }}
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,138,190,0.35) 0%, rgba(1,138,190,0) 65%)",
          top: "-120px", right: "-80px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 460, height: 460, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(16,185,129,0) 65%)",
          bottom: "-160px", left: "-120px",
        }}
      />

      {/* Subtle dot grid */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          opacity: 0.35,
        }}
      />

      <div style={{ position: "relative", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Rings + logo */}
        <div style={{ position: "relative", width: 120, height: 120, marginBottom: 26 }}>
          <div className="splash-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(151,202,219,0.62)", borderTopColor: "#10b981" }} />
          <div className="splash-ring-rev" style={{ position: "absolute", inset: 10, borderRadius: "50%", border: "1.5px dashed rgba(1,138,190,0.6)", borderBottomColor: "transparent" }} />

          <div className="splash-logo" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                width: 56, height: 56, borderRadius: 16,
                background: "linear-gradient(135deg, #018ABE, #02457A)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L1 4v6l6 3 6-3V4L7 1z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="splash-word" style={{ fontSize: 24, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", "--d": "0.05s" } as React.CSSProperties}>
          capstonkeren
        </div>
        <div className="splash-word" style={{ fontSize: 13, color: "#97CADB", marginTop: 6, "--d": "0.2s" } as React.CSSProperties}>
          Analisis Pangan &amp; Kluster Wilayah
        </div>

        {/* Loading bar */}
        <div className="splash-word" style={{ width: 200, marginTop: 30, "--d": "0.35s" } as React.CSSProperties}>
          <div style={{ height: 4, borderRadius: 99, background: "rgba(255,255,255,0.12)", overflow: "hidden" }}>
            <div className="splash-bar-fill" style={{ height: "100%", borderRadius: 99, background: "linear-gradient(90deg, #018ABE, #10b981)" }} />
          </div>
          <div style={{ fontSize: 11, color: "rgba(151,202,219,0.87)", marginTop: 10, letterSpacing: "0.06em" }}>
            Memuat dashboard…
          </div>
        </div>
      </div>
    </div>
  );
}