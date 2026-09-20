import logoDashboard from "../assets/logo-dashboard.png";

type NavItem = { id: number; label: string };
type Props = { activeNav: number; navItems: NavItem[]; onNav: (id: number) => void; onExit: () => void };

const NavIcon = ({ id, active }: { id: number; active: boolean }) => {
  const color = active ? "white" : "rgba(151,202,219,0.78)";
  const icons = [
    <svg key="0" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" stroke={color} strokeWidth="1.5"/>
      <rect x="9" y="1" width="6" height="6" rx="1.5" stroke={color} strokeWidth="1.5"/>
      <rect x="1" y="9" width="6" height="6" rx="1.5" stroke={color} strokeWidth="1.5"/>
      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke={color} strokeWidth="1.5"/>
    </svg>,
    <svg key="1" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 4.5L6 2.5l4 2.5 4-2V12l-4 2-4-2.5-4 1.5V4.5z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M6 2.5v10M10 5v10" stroke={color} strokeWidth="1.4"/>
    </svg>,
    <svg key="2" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke={color} strokeWidth="1.4"/>
      <circle cx="3" cy="3.5" r="1.5" stroke={color} strokeWidth="1.3"/>
      <circle cx="13" cy="3.5" r="1.5" stroke={color} strokeWidth="1.3"/>
      <circle cx="3" cy="12.5" r="1.5" stroke={color} strokeWidth="1.3"/>
      <circle cx="13" cy="12.5" r="1.5" stroke={color} strokeWidth="1.3"/>
    </svg>,
    <svg key="3" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5z" stroke={color} strokeWidth="1.4"/>
      <circle cx="8" cy="6" r="1.5" stroke={color} strokeWidth="1.3"/>
    </svg>,
    <svg key="4" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke={color} strokeWidth="1.4"/>
      <path d="M3 11.5l3-4 3 2.5 2-4.5 2 2" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ];
  return icons[id] ?? icons[0];
};

export default function Sidebar({ activeNav, navItems, onNav, onExit }: Props) {
  return (
    <aside
      className="flex flex-col h-full w-[220px] shrink-0"
      style={{ background: "rgba(0,27,72,0.35)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRight: "1px solid rgba(151,202,219,0.08)" }}
    >
      {/* Logo */}
      <div className="flex items-center px-5 py-5 shrink-0">
        <img
          src={logoDashboard}
          alt="SIPPA"
          draggable={false}
          style={{ height: 46, width: "100%", maxWidth: 174, objectFit: "contain" }}
        />
      </div>

      {/* Label */}
      <div className="px-5 mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(151,202,219,0.62)" }}>Menu</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 px-3 flex-1">
        {navItems.map((item) => {
          const active = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-left relative"
              style={{
                background: active ? "rgba(1,138,190,0.2)" : "transparent",
                transition: "background 150ms ease",
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full"
                  style={{ background: "#018ABE" }}/>
              )}
              <NavIcon id={item.id} active={active} />
              <span
                className="text-[13px] font-medium"
                style={{ color: active ? "white" : "rgba(151,202,219,0.87)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 shrink-0 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <button
          onClick={onExit}
          title="Kembali ke Landing Page"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-left"
          style={{ background: "rgba(220,38,38,0.16)", border: "1px solid rgba(248,113,113,0.45)", cursor: "pointer", transition: "background 150ms ease" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(220,38,38,0.32)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(220,38,38,0.16)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1.5H3.5a1 1 0 00-1 1v11a1 1 0 001 1H8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8h6.5" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10.5 5.5L13 8l-2.5 2.5" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[13px] font-semibold" style={{ color: "white", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Keluar
          </span>
        </button>
      </div>
    </aside>
  );
}
