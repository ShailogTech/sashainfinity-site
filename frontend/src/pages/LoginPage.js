import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality is UI only - no backend connected.");
  };

  return (
    <div className="sasha-auth-page" data-testid="login-page">
      <div className="auth-container">
        {/* Left - Branding */}
        <div className="auth-branding">
          <Link to="/" className="auth-logo" data-testid="auth-logo">
            <img src="https://sashainfinity.com/wp-content/uploads/2025/06/sasha-logo-small.png" alt="SashaInfinity" />
          </Link>
          <div className="auth-brand-content">
            <h2>Welcome to <span>SashaInfinity</span></h2>
            <p>Transform your education with immersive AR/VR learning experiences, personalized paths, and expert guidance.</p>
            <div className="auth-brand-stats">
              <div><strong>50+</strong><span>Students</span></div>
              <div><strong>70+</strong><span>Lessons</span></div>
              <div><strong>5+</strong><span>Tutors</span></div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="auth-form-side">
          <div className="auth-form-wrapper">
            <h3>Welcome back</h3>
            <p className="auth-subtitle">Sign in to your account to continue learning</p>

            <form onSubmit={handleSubmit} data-testid="login-form">
              <div className="auth-form-group">
                <label>Email</label>
                <div className="auth-input-wrap">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com" required data-testid="login-email" />
                </div>
              </div>
              <div className="auth-form-group">
                <label>Password</label>
                <div className="auth-input-wrap">
                  <i className="fa-solid fa-lock"></i>
                  <input type={showPassword ? "text" : "password"} value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="Enter your password" required data-testid="login-password" />
                  <button type="button" className="toggle-pass" onClick={() => setShowPassword(!showPassword)} data-testid="toggle-password">
                    <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>

              <div className="auth-options">
                <label className="remember-me">
                  <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} data-testid="remember-me" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="forgot-link" data-testid="forgot-password">Forgot password?</button>
              </div>

              <button type="submit" className="auth-submit-btn" data-testid="login-submit">
                Sign in <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>

            <div className="auth-divider"><span>Or continue with</span></div>

            <div className="auth-social-btns">
              <button className="social-btn google" data-testid="google-login">
                <i className="fa-brands fa-google"></i> Google
              </button>
              <button className="social-btn linkedin" data-testid="linkedin-login">
                <i className="fa-brands fa-linkedin-in"></i> LinkedIn
              </button>
            </div>

            <p className="auth-switch">
              Don't have an account? <Link to="/get-started" data-testid="switch-to-register">Sign up for free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
