import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Products from './components/Products';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

import SEO from './components/SEO';

function App() {

  // Global Scroll Reveal Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }); // Run on every render/update to catch new elements if any

  return (
    <div className="App">
      <SEO />
      <Navbar />
      <Hero />
      <Stats />
      <Services />

      <Features />



      <Products />

      {/* Clients Section */}
      <section className="clients section-padding bg-light">
        <div className="container text-center">
          <div className="section-header reveal fade-bottom">
            <h2>Trusted By Industry Leaders</h2>
          </div>
          <div className="client-logos reveal fade-bottom">
            <div className="client-logo">TATA Motors</div>
            <div className="client-logo">Mahindra</div>
            <div className="client-logo">Ashok Leyland</div>
            <div className="client-logo">L&T Heavy Eng</div>
            <div className="client-logo">BHEL</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Ready to start your next project? Contact us for a consultation or quote.</p>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>Plot No. 42, Ambattur Industrial Estate, Chennai, Tamil Nadu - 600058</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@srilakshmieng.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      <Footer />
    </div>
  );
}

// Extracted Contact Form Component for cleaner code
function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // REPLACE THIS WITH YOUR RAILWAY DEPLOYED URL
    // Example: 'https://web-production-xxxx.up.railway.app/api/contact'
    const API_URL = 'http://localhost:3000/api/contact';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@address.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          rows="4"
          name="message"
          placeholder="How can we help you?"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary full-width" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="success-msg" style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>}
      {status === 'error' && <p className="error-msg" style={{ color: 'red', marginTop: '10px' }}>Failed to send message. Please try again.</p>}
    </form>
  );
}

export default App;
