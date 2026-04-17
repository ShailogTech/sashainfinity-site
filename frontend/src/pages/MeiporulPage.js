import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  { icon: "fa-solid fa-cube", title: "3D Math Models", desc: "Explore complex mathematical concepts through interactive 3D models in augmented reality." },
  { icon: "fa-solid fa-mobile-screen", title: "Mobile AR Experience", desc: "Simply point your phone at the AR markers and watch math come alive around you." },
  { icon: "fa-solid fa-gamepad", title: "Interactive Quizzes", desc: "Test your knowledge with gamified quizzes embedded within the AR experience." },
  { icon: "fa-solid fa-chart-bar", title: "Progress Tracking", desc: "Track learning progress with detailed analytics and performance insights." },
  { icon: "fa-solid fa-users", title: "Collaborative Learning", desc: "Learn together with multiplayer AR sessions for group study and tutoring." },
  { icon: "fa-solid fa-award", title: "Certification", desc: "Earn verified certificates upon completing AR learning modules." },
];

const arCourses = [
  { title: "Trigonometry in 3D", level: "Beginner", duration: "45 min", students: 120, color: "#43e97b" },
  { title: "Algebra Visualized", level: "Intermediate", duration: "60 min", students: 85, color: "#667EEA" },
  { title: "Geometry Explorer", level: "Beginner", duration: "30 min", students: 150, color: "#f4911a" },
  { title: "Calculus AR Lab", level: "Advanced", duration: "90 min", students: 45, color: "#f5576c" },
  { title: "Statistics & Data Viz", level: "Intermediate", duration: "75 min", students: 60, color: "#4facfe" },
  { title: "Number Theory AR", level: "Advanced", duration: "60 min", students: 30, color: "#764BA2" },
];

export default function MeiporulPage() {
  const [arModal, setArModal] = useState(null);
  const [arView, setArView] = useState("qr");

  return (
    <div className="sasha-page meiporul-page" data-testid="meiporul-page">
      <div className="page-hero meiporul-hero">
        <div className="sasha-container">
          <div className="page-hero-content">
            <div className="section-label" style={{ justifyContent: "center" }}>Augmented Reality</div>
            <h1>Meiporul AR</h1>
            <p>Experience mathematics in augmented reality. Transform the way you learn with immersive 3D models, interactive lessons, and gamified quizzes.</p>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
              <Link to="/get-started" className="hero-btn hero-btn-fill" data-testid="meiporul-get-started">
                Start Learning <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="sasha-container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: "center" }}>What Makes It Special</div>
            <h2>AR Learning Features</h2>
            <p>Our augmented reality platform brings a new dimension to mathematics education.</p>
          </div>
          <div className="meiporul-features-grid" data-testid="meiporul-features">
            {features.map((f, i) => (
              <div className="meiporul-feature-card" key={i} data-testid={`feature-card-${i}`}>
                <div className="meiporul-feature-icon"><i className={f.icon}></i></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 0", background: "#fafafa" }}>
        <div className="sasha-container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: "center" }}>Simple Steps</div>
            <h2>How Meiporul AR Works</h2>
          </div>
          <div className="meiporul-steps" data-testid="meiporul-steps">
            {[
              { num: "01", title: "Download the App", desc: "Get the Meiporul AR app from the App Store or Google Play." },
              { num: "02", title: "Scan the Marker", desc: "Point your camera at the AR marker in your textbook or worksheet." },
              { num: "03", title: "Explore in 3D", desc: "Watch mathematical concepts come alive in 3D. Rotate, zoom, and interact." },
              { num: "04", title: "Test Your Knowledge", desc: "Complete interactive quizzes and challenges within the AR experience." },
            ].map((step, i) => (
              <div className="meiporul-step" key={i} data-testid={`step-${i}`}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AR Courses */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="sasha-container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: "center" }}>AR Modules</div>
            <h2>Available AR Courses</h2>
            <p>Explore our growing library of AR-enhanced learning modules.</p>
          </div>
          <div className="ar-courses-grid" data-testid="ar-courses-grid">
            {arCourses.map((c, i) => (
              <div className="ar-course-card" key={i} data-testid={`ar-course-${i}`}>
                {/* 3D Model Preview */}
                <div className="ar-model-preview" style={{ background: `linear-gradient(135deg, ${c.color}18, ${c.color}08)`, borderRadius: 12, height: 140, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, border: `1px solid ${c.color}22`, position: "relative", overflow: "hidden" }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                  <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 700, color: c.color, textTransform: "uppercase", letterSpacing: 0.5 }}>3D Preview</div>
                </div>
                <div className="ar-course-badge">{c.level}</div>
                <h3>{c.title}</h3>
                <div className="ar-course-meta">
                  <span><i className="fa-solid fa-clock"></i> {c.duration}</span>
                  <span><i className="fa-solid fa-users"></i> {c.students} learners</span>
                </div>
                <button onClick={() => setArModal(c)} className="enroll-btn" data-testid={`ar-start-${i}`} style={{ width: "100%", textAlign: "center" }}>
                  <i className="fa-solid fa-cube" style={{ marginRight: 6 }}></i> Start AR Module
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AR Launch Modal */}
      {arModal && (
        <div className="ar-modal-overlay" style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }} onClick={() => { setArModal(null); setArView("qr"); }}>
          <div className="ar-modal-content" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderRadius: 24, padding: 40, maxWidth: 460, width: "90%", textAlign: "center", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 24px 80px rgba(0,0,0,0.15)" }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>{arModal.title}</h3>
            <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>{arModal.level} · {arModal.duration}</p>

            {/* Toggle Tabs */}
            <div style={{ display: "flex", gap: 0, background: "#f3f4f6", borderRadius: 10, padding: 3, marginBottom: 20 }}>
              <button onClick={() => setArView("qr")} style={{ flex: 1, padding: "8px 16px", borderRadius: 8, border: "none", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Inter, sans-serif", background: arView === "qr" ? "#fff" : "transparent", color: arView === "qr" ? "#1a1a2e" : "#9ca3af", boxShadow: arView === "qr" ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s" }}>
                <i className="fa-solid fa-qrcode" style={{ marginRight: 6 }}></i> QR Code
              </button>
              <button onClick={() => setArView("3d")} style={{ flex: 1, padding: "8px 16px", borderRadius: 8, border: "none", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Inter, sans-serif", background: arView === "3d" ? "#fff" : "transparent", color: arView === "3d" ? "#1a1a2e" : "#9ca3af", boxShadow: arView === "3d" ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s" }}>
                <i className="fa-solid fa-cube" style={{ marginRight: 6 }}></i> 3D Preview
              </button>
            </div>

            {/* QR View */}
            {arView === "qr" && (
              <>
                <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 16 }}>Scan with your phone to launch the AR experience.</p>
                <div style={{ width: 180, height: 180, borderRadius: 16, background: "#f3f4f6", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
                    <rect x="10" y="10" width="30" height="30" rx="4" fill="#1a1a2e"/><rect x="80" y="10" width="30" height="30" rx="4" fill="#1a1a2e"/>
                    <rect x="10" y="80" width="30" height="30" rx="4" fill="#1a1a2e"/><rect x="50" y="50" width="20" height="20" rx="2" fill="#1a1a2e"/>
                    <rect x="15" y="15" width="20" height="20" rx="2" fill="#fff"/><rect x="85" y="15" width="20" height="20" rx="2" fill="#fff"/>
                    <rect x="15" y="85" width="20" height="20" rx="2" fill="#fff"/><rect x="20" y="20" width="10" height="10" fill="#1a1a2e"/>
                    <rect x="90" y="20" width="10" height="10" fill="#1a1a2e"/><rect x="20" y="90" width="10" height="10" fill="#1a1a2e"/>
                    <rect x="50" y="10" width="6" height="6" fill="#1a1a2e"/><rect x="60" y="18" width="6" height="6" fill="#1a1a2e"/>
                    <rect x="50" y="80" width="6" height="6" fill="#1a1a2e"/><rect x="80" y="60" width="6" height="6" fill="#1a1a2e"/>
                    <rect x="95" y="55" width="6" height="6" fill="#1a1a2e"/><rect x="55" y="95" width="6" height="6" fill="#1a1a2e"/>
                  </svg>
                </div>
                <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 16 }}>Or open on a WebXR-compatible browser</p>
              </>
            )}

            {/* 3D Preview */}
            {arView === "3d" && (
              <div style={{ width: "100%", height: 220, borderRadius: 16, background: `linear-gradient(135deg, ${arModal.color}12, ${arModal.color}04)`, margin: "0 auto 16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: `1px solid ${arModal.color}20`, position: "relative" }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={arModal.color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
                <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 12 }}>Interactive 3D model — rotate and zoom</p>
                <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 700, color: arModal.color, textTransform: "uppercase" }}>3D Preview</div>
              </div>
            )}

            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => { setArModal(null); setArView("qr"); }} style={{ flex: 1, padding: "12px 20px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, background: "transparent", fontSize: 14, fontWeight: 600, cursor: "pointer", color: "#6b7280", fontFamily: "Inter, sans-serif" }}>Close</button>
              <button style={{ flex: 1, padding: "12px 20px", border: "none", borderRadius: 12, background: "#f4911a", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>Launch AR</button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#fafafa" }}>
        <div className="sasha-container">
          <div className="cta-box" style={{ textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <h2>Ready to Experience AR Learning?</h2>
            <p style={{ maxWidth: 500 }}>Join thousands of students who are already transforming their math education with Meiporul AR.</p>
            <Link to="/get-started" className="hero-btn hero-btn-fill" data-testid="meiporul-cta-btn">
              Get Started Free <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
