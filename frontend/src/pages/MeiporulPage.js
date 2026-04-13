import { Link } from "react-router-dom";

const features = [
  { icon: "fa-solid fa-cube", title: "3D Math Models", desc: "Explore complex mathematical concepts through interactive 3D models in augmented reality." },
  { icon: "fa-solid fa-mobile-screen", title: "Mobile AR Experience", desc: "Simply point your phone at the AR markers and watch math come alive around you." },
  { icon: "fa-solid fa-gamepad", title: "Interactive Quizzes", desc: "Test your knowledge with gamified quizzes embedded within the AR experience." },
  { icon: "fa-solid fa-chart-bar", title: "Progress Tracking", desc: "Track learning progress with detailed analytics and performance insights." },
  { icon: "fa-solid fa-users", title: "Collaborative Learning", desc: "Learn together with multiplayer AR sessions for group study and tutoring." },
  { icon: "fa-solid fa-award", title: "Certification", desc: "Earn verified certificates upon completing AR learning modules." },
];

const arCourses = [
  { title: "Trigonometry in 3D", level: "Beginner", duration: "45 min", students: 120 },
  { title: "Algebra Visualized", level: "Intermediate", duration: "60 min", students: 85 },
  { title: "Geometry Explorer", level: "Beginner", duration: "30 min", students: 150 },
  { title: "Calculus AR Lab", level: "Advanced", duration: "90 min", students: 45 },
  { title: "Statistics & Data Viz", level: "Intermediate", duration: "75 min", students: 60 },
  { title: "Number Theory AR", level: "Advanced", duration: "60 min", students: 30 },
];

export default function MeiporulPage() {
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
                <div className="ar-course-badge">{c.level}</div>
                <h3>{c.title}</h3>
                <div className="ar-course-meta">
                  <span><i className="fa-solid fa-clock"></i> {c.duration}</span>
                  <span><i className="fa-solid fa-users"></i> {c.students} learners</span>
                </div>
                <button className="enroll-btn" data-testid={`ar-enroll-${i}`}>Start Module</button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
