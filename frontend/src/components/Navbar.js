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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About", isHash: true },
    { to: "/courses", label: "Courses" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/meiporul-ar", label: "Meiporul AR" },
  ];

  const handleHashClick = (hash) => {
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav data-testid="navbar" className={`sasha-nav ${scrolled ? "scrolled" : ""}`}>
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
          <Link to="/login" className="btn-ghost" data-testid="nav-login-btn">Log In</Link>
          <Link to="/get-started" className="btn-primary-nav" data-testid="nav-get-started-btn">Get Started</Link>
        </div>

        <button className={`sasha-hamburger ${mobileOpen ? "active" : ""}`} onClick={toggleMobile} data-testid="hamburger-btn">
          <span></span><span></span><span></span>
        </button>
      </nav>

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
          style={{ color: "#f4911a" }} data-testid="mobile-login-link">Log In</Link>
        <Link to="/get-started" onClick={() => { setMobileOpen(false); document.body.style.overflow = ""; }}
          className="mobile-get-started" data-testid="mobile-get-started-link">Get Started</Link>
      </div>
    </>
  );
}
