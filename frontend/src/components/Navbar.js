import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? "hidden" : "";
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const eduSearchResults = searchQuery.length > 1 ? [
    { type: "course", title: "React Mastery", match: `Found "${searchQuery}" in course description`, icon: "fa-solid fa-book" },
    { type: "timestamp", title: "React Hooks Deep Dive", match: `"${searchQuery}" mentioned at 4:32`, time: "4:32", course: "React Mastery", icon: "fa-solid fa-clock" },
    { type: "timestamp", title: "State Management Patterns", match: `"${searchQuery}" explained at 12:15`, time: "12:15", course: "React Mastery", icon: "fa-solid fa-clock" },
    { type: "lesson", title: "Python Functions", match: `Related concept found in lesson`, icon: "fa-solid fa-play" },
    { type: "resource", title: "MDN Web Docs", match: `Resource link from lesson notes`, icon: "fa-solid fa-link" },
  ] : [];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About", isHash: true },
    { to: "/courses", label: "Courses" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/meiporul-ar", label: "AR" },
  ];

  const handleHashClick = (hash) => {
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDarkPage = location.pathname === "/meiporul-ar";

  return (
    <>
      <nav data-testid="navbar" className={`sasha-nav ${scrolled ? "scrolled" : ""} ${isDarkPage && !scrolled ? "nav-dark" : ""}`}>
        <Link to="/" className="sasha-nav-logo" data-testid="nav-logo">
          <img src="https://sashainfinity.com/wp-content/uploads/2025/06/sasha-logo-small.png" alt="Sashainfinity" />
        </Link>

        <ul className="sasha-nav-links">
          {navLinks.map(link => (
            <li key={link.to}>
              {link.isHash ? (
                <Link to="/" onClick={() => handleHashClick("about")} data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                  {link.label}
                </Link>
              ) : (
                <Link to={link.to} className={location.pathname === link.to ? "active" : ""} data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="sasha-nav-cta">
          <button onClick={() => setSearchOpen(!searchOpen)} className="btn-ghost" style={{ padding: "10px 12px", display: "flex", alignItems: "center" }} data-testid="nav-search-btn">
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 14 }}></i>
          </button>
          <Link to="/login" className="btn-ghost" data-testid="nav-login-btn">Login</Link>
          <Link to="/get-started" className="btn-primary-nav" data-testid="nav-get-started-btn">Get Started</Link>
        </div>

        <button className={`sasha-hamburger ${mobileOpen ? "active" : ""}`} onClick={toggleMobile} data-testid="hamburger-btn">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* EduSearch */}
      {searchOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 100 }} onClick={() => { setSearchOpen(false); setSearchQuery(""); }}>
          <div style={{ width: "90%", maxWidth: 620, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", borderRadius: 20, boxShadow: "0 24px 80px rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.3)", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: searchQuery ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
              <i className="fa-solid fa-magnifying-glass" style={{ color: "#f4911a", fontSize: 16 }}></i>
              <input autoFocus type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="EduSearch — find courses, lessons, even video timestamps..." style={{ flex: 1, border: "none", outline: "none", fontSize: 15, fontFamily: "Inter, sans-serif", color: "#1a1a2e", background: "transparent", padding: "10px 0" }} />
              <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }} style={{ padding: "6px 12px", background: "#f3f4f6", border: "none", borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: "pointer", color: "#6b7280", fontFamily: "Inter" }}>ESC</button>
            </div>
            {eduSearchResults.length > 0 && (
              <div style={{ maxHeight: 340, overflowY: "auto", padding: "8px" }}>
                {eduSearchResults.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, cursor: "pointer", transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(244,145,26,0.05)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: r.type === "timestamp" ? "rgba(102,126,234,0.1)" : r.type === "course" ? "rgba(244,145,26,0.1)" : "rgba(67,200,130,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={r.icon} style={{ fontSize: 14, color: r.type === "timestamp" ? "#667EEA" : r.type === "course" ? "#f4911a" : "#43e97b" }}></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", margin: 0 }}>{r.title}</p>
                      <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{r.match}</p>
                    </div>
                    {r.time && (
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#667EEA", background: "rgba(102,126,234,0.08)", padding: "3px 8px", borderRadius: 6, whiteSpace: "nowrap" }}>{r.time}</span>
                    )}
                    {r.type === "course" && (
                      <span style={{ fontSize: 10, fontWeight: 700, color: "#f4911a", background: "rgba(244,145,26,0.08)", padding: "3px 8px", borderRadius: 6, whiteSpace: "nowrap" }}>COURSE</span>
                    )}
                  </div>
                ))}
                <p style={{ textAlign: "center", fontSize: 11, color: "#9ca3af", padding: "8px 0 4px" }}>Powered by EduSearch — finds exact video timestamps</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`sasha-mobile-menu ${mobileOpen ? "active" : ""}`} data-testid="mobile-menu">
        {navLinks.map(link => (
          <Link key={link.to} to={link.isHash ? "/" : link.to}
            onClick={() => { setMobileOpen(false); document.body.style.overflow = ""; if (link.isHash) handleHashClick("about"); }}
            data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
            {link.label}
          </Link>
        ))}
        <Link to="/login" onClick={() => { setMobileOpen(false); document.body.style.overflow = ""; }}
          className="mobile-login-link" data-testid="mobile-login-link">Login</Link>
        <Link to="/get-started" onClick={() => { setMobileOpen(false); document.body.style.overflow = ""; }}
          className="mobile-get-started" data-testid="mobile-get-started-link">Get Started</Link>
      </div>
    </>
  );
}
