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

      {/* Search Bar */}
      {searchOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 120 }} onClick={() => setSearchOpen(false)}>
          <div style={{ width: "90%", maxWidth: 600, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderRadius: 20, padding: "8px 8px 8px 20px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 24px 80px rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.3)" }} onClick={e => e.stopPropagation()}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: "#9ca3af", fontSize: 16 }}></i>
            <input autoFocus type="text" placeholder="Search courses, lessons, topics..." style={{ flex: 1, border: "none", outline: "none", fontSize: 16, fontFamily: "Inter, sans-serif", color: "#1a1a2e", background: "transparent", padding: "14px 0" }} />
            <button onClick={() => setSearchOpen(false)} style={{ padding: "10px 16px", background: "#f3f4f6", border: "none", borderRadius: 12, fontSize: 12, fontWeight: 700, cursor: "pointer", color: "#6b7280", fontFamily: "Inter" }}>ESC</button>
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
