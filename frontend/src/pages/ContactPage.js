import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="sasha-page contact-page" data-testid="contact-page">
      <div className="page-hero">
        <div className="sasha-container">
          <div className="page-hero-content">
            <div className="section-label" style={{ justifyContent: "center" }}>Reach Out</div>
            <h1>Contact</h1>
            <p>We are here to help</p>
          </div>
        </div>
      </div>

      <div className="sasha-container" style={{ paddingTop: 60, paddingBottom: 100 }}>
        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info" data-testid="contact-info">
            <h2>Keep In Touch With Us</h2>
            <p className="contact-subtitle">We are here to help you with any questions about our courses, programs, or services.</p>

            <div className="contact-cards">
              <div className="contact-info-card">
                <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Address</h4>
                  <p>Ward 1, Uthayapuri Colony,<br />Narasothipatti,<br />Salem, Tamil Nadu 636004</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+918438740893">+91 8438740893</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:support@sashainfinity.com">support@sashainfinity.com</a>
                  <br />
                  <a href="mailto:hr@sashainfinity.com">hr@sashainfinity.com</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map" data-testid="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6!2d78.115859!3d11.666133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzU4LjEiTiA3OMKwMDYnNTcuMSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="300" style={{ border: 0, borderRadius: 16 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="SashaInfinity Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container" data-testid="contact-form-container">
            <h3>Get in Touch</h3>
            {submitted && (
              <div className="form-success" data-testid="contact-success">
                <i className="fa-solid fa-check-circle"></i> Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} data-testid="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name" required data-testid="contact-name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com" required data-testid="contact-email" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="Subject" required data-testid="contact-subject" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..." required data-testid="contact-message"></textarea>
              </div>
              <button type="submit" className="hero-btn hero-btn-fill" style={{ width: "100%", justifyContent: "center" }} data-testid="contact-submit">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
