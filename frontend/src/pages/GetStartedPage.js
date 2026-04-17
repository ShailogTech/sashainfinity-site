import { useState } from "react";
import { Link } from "react-router-dom";

export default function GetStartedPage() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration functionality is UI only - no backend connected.");
  };

  return (
    <div className="sasha-auth-page" data-testid="get-started-page">
      {/* Mobile header */}
      <div className="auth-mobile-header">
        <Link to="/" className="auth-mobile-logo" data-testid="register-mobile-logo">
          <img src="https://sashainfinity.com/wp-content/uploads/2025/06/sasha-logo-small.png" alt="SashaInfinity" />
        </Link>
        <p>Future of Education</p>
      </div>

      <div className="auth-container">
        {/* Left - Branding */}
        <div className="auth-branding register-branding">
          <Link to="/" className="auth-logo" data-testid="register-logo">
            <img src="https://sashainfinity.com/wp-content/uploads/2025/06/sasha-logo-small.png" alt="SashaInfinity" />
          </Link>
          <div className="auth-brand-content">
            <h2>Start Your <span>Journey</span></h2>
            <p>Join thousands of learners and unlock the future of education with AR/VR, personalized learning paths, and expert-led courses.</p>
            <div className="auth-brand-features">
              <div><i className="fa-solid fa-check-circle"></i> Immersive AR/VR Learning</div>
              <div><i className="fa-solid fa-check-circle"></i> Personalized Learning Paths</div>
              <div><i className="fa-solid fa-check-circle"></i> Expert Tutors & Mentors</div>
              <div><i className="fa-solid fa-check-circle"></i> Certificate on Completion</div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="auth-form-side">
          <div className="auth-form-wrapper">
            <h3>Create your account</h3>
            <p className="auth-subtitle">Join thousands of learners and start your journey today</p>

            {/* Role selector */}
            <div className="role-selector" data-testid="role-selector">
              <button className={`role-btn ${role === "student" ? "active" : ""}`}
                onClick={() => setRole("student")} data-testid="role-student">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>Student</span>
                <small>Learn from experts</small>
              </button>
              <button className={`role-btn ${role === "instructor" ? "active" : ""}`}
                onClick={() => setRole("instructor")} data-testid="role-instructor">
                <i className="fa-solid fa-chalkboard-user"></i>
                <span>Tutor</span>
                <small>Teach &amp; earn</small>
              </button>
            </div>

            <form onSubmit={handleSubmit} data-testid="register-form">
              <div className="auth-form-row">
                <div className="auth-form-group">
                  <label>First name</label>
                  <div className="auth-input-wrap">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                      placeholder="First name" required data-testid="register-first-name" />
                  </div>
                </div>
                <div className="auth-form-group">
                  <label>Last name</label>
                  <div className="auth-input-wrap">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                      placeholder="Last name" required data-testid="register-last-name" />
                  </div>
                </div>
              </div>
              <div className="auth-form-group">
                <label>Email</label>
                <div className="auth-input-wrap">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com" required data-testid="register-email" />
                </div>
              </div>
              <div className="auth-form-group">
                <label>Create a password</label>
                <div className="auth-input-wrap">
                  <i className="fa-solid fa-lock"></i>
                  <input type={showPassword ? "text" : "password"} value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="Create a password" required data-testid="register-password" />
                  <button type="button" className="toggle-pass" onClick={() => setShowPassword(!showPassword)}>
                    <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>
              <div className="auth-form-group">
                <label>Confirm your password</label>
                <div className="auth-input-wrap">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" value={form.confirmPassword}
                    onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
                    placeholder="Confirm your password" required data-testid="register-confirm-password" />
                </div>
              </div>

              <label className="remember-me" style={{ marginBottom: 20 }}>
                <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} data-testid="agree-terms" />
                <span>I agree to the <Link to="/contact">Terms of Service</Link> and <Link to="/contact">Privacy Policy</Link></span>
              </label>

              <button type="submit" className="auth-submit-btn" disabled={!agreed} data-testid="register-submit">
                Create Account <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link to="/login" data-testid="switch-to-login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
