/** Full-screen animated splash shown once on app start / refresh. */
import logoLoading from "../assets/logo-loading.png";

export default function SplashScreen({ leaving }: { leaving?: boolean }) {
  return (
    <div
      className={leaving ? "splash-leaving" : ""}
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
      {/* Subtle dot grid */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.25,
        }}
      />

      <div style={{ position: "relative", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Logo */}
        <div className="splash-logo" style={{ marginBottom: 24 }}>
          <img
            src={logoLoading}
            alt="Loading Logo"
            draggable={false}
            style={{ height: 132, width: "auto", objectFit: "contain", filter: "drop-shadow(0 10px 28px rgba(0,0,0,0.32))" }}
          />
        </div>

        <div className="splash-word" style={{ fontSize: 22, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", "--d": "0.1s" } as React.CSSProperties}>
          SIPPA
        </div>
        <div className="splash-word" style={{ fontSize: 13, color: "#97CADB", marginTop: 8, "--d": "0.25s" } as React.CSSProperties}>
          Sistem Informasi Pemetaan Produksi Pertanian
        </div>

        {/* Simple loading indicator */}
        <div className="splash-word" style={{ marginTop: 32, "--d": "0.4s" } as React.CSSProperties}>
          <div className="splash-dots" style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            <span className="splash-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#018ABE", "--delay": "0s" } as React.CSSProperties} />
            <span className="splash-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#018ABE", "--delay": "0.15s" } as React.CSSProperties} />
            <span className="splash-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#018ABE", "--delay": "0.3s" } as React.CSSProperties} />
          </div>
          <div style={{ fontSize: 11, color: "rgba(151,202,219,0.7)", marginTop: 12, letterSpacing: "0.05em" }}>
            Memuat dashboard…
          </div>
        </div>
      </div>
    </div>
  );
}