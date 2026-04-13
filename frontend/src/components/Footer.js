import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="sasha-footer" data-testid="footer">
      <div className="sasha-container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <Link to="/"><img src="https://sashainfinity.com/wp-content/uploads/2025/06/sasha-logo-small.png" alt="Sashainfinity" /></Link>
            </div>
            <p>1477/5/630-E, near Sona College of Technology, Kamarajar Nagar, Subramania Nagar, Suramangalam Salem, Tamil Nadu 636004</p>
            <p className="footer-phone">+91 8438740893</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/sashainfinityedu" target="_blank" rel="noopener noreferrer" data-testid="footer-instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/sashainfinity/" target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/courses">All Courses</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/meiporul-ar">Meiporul AR</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Courses</h4>
            <ul className="footer-links">
              <li><Link to="/courses">Data Analytics</Link></li>
              <li><Link to="/courses">Full Stack Development</Link></li>
              <li><Link to="/courses">React JS Mastery</Link></li>
              <li><Link to="/courses">MS Excel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/get-started">Join as Student</Link></li>
              <li><Link to="/get-started">Join as Instructor</Link></li>
              <li><Link to="/login">Sign In</Link></li>
            </ul>
            <h4 className="footer-heading" style={{ marginTop: 20 }}>Hours</h4>
            <p style={{ fontSize: 14, color: "var(--sasha-gray)" }}>Mon - Sat: 9:00 AM - 7:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2024 Sashainfinity. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
