// components/Graphic.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Graphic() {
  const [activeSection, setActiveSection] = useState('matatu');
  const location = useLocation();

  useEffect(() => {
    // Check for hash in URL
    if (location.hash) {
      const section = location.hash.replace('#', '');
      setActiveSection(section);
      
      // Smooth scroll to section
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const matatuProjects = [
    { id: 1, title: "City Express Matatu", description: "Full vehicle wrap design", image: "🚌" },
    { id: 2, title: "Urban Shuttle Branding", description: "Interior and exterior branding", image: "🎨" },
    { id: 3, title: "School Bus Design", description: "Educational institution transport branding", image: "🚎" },
    { id: 4, title: "Tourist Van Branding", description: "Tourism company vehicle design", image: "🚐" }
  ];

  const signageProjects = [
    { id: 1, title: "3D Business Sign", description: "LED illuminated signage", image: "🏢" },
    { id: 2, title: "Event Banner", description: "Large format outdoor banner", image: "🎪" },
    { id: 3, title: "Shop Front Signage", description: "Custom retail store signage", image: "🛍️" },
    { id: 4, title: "Office Signage", description: "Corporate office directional signs", image: "🏛️" }
  ];

  return (
    <div className="graphic-page">
      {/* Back Button */}
      <div className="graphic-header">
        <Link to="/#projects" className="back-button">
          ← Back to Projects
        </Link>
        <h1 className="graphic-title">Graphic Design Gallery</h1>
        <p className="graphic-subtitle">
          Professional Matatu Branding & 3D Signage Solutions
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="graphic-tabs">
        <button 
          className={`graphic-tab ${activeSection === 'matatu' ? 'active' : ''}`}
          onClick={() => setActiveSection('matatu')}
        >
          Matatu Branding
        </button>
        <button 
          className={`graphic-tab ${activeSection === 'signage' ? 'active' : ''}`}
          onClick={() => setActiveSection('signage')}
        >
          3D Signage & Banners
        </button>
      </div>

      {/* Content Sections */}
      <div className="graphic-content">
        {/* Matatu Branding Section */}
        <section 
          id="matatu" 
          className={`graphic-section ${activeSection === 'matatu' ? 'active' : ''}`}
        >
          <h2 className="section-title">Matatu Branding Projects</h2>
          <p className="section-description">
            Complete vehicle branding solutions including exterior wraps, interior design, 
            and marketing materials for public transport.
          </p>
          
          <div className="gallery-grid">
            {matatuProjects.map(project => (
              <div key={project.id} className="gallery-item">
                <div className="gallery-image">
                  <span className="gallery-emoji">{project.image}</span>
                </div>
                <div className="gallery-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="gallery-tags">
                    <span className="gallery-tag">Vehicle Wrap</span>
                    <span className="gallery-tag">Brand Identity</span>
                    <span className="gallery-tag">Print Design</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Signage Section */}
        <section 
          id="signage" 
          className={`graphic-section ${activeSection === 'signage' ? 'active' : ''}`}
        >
          <h2 className="section-title">3D Signage & Banners</h2>
          <p className="section-description">
            Professional signage solutions including 3D letters, event banners, 
            business signs, and digital art products.
          </p>
          
          <div className="gallery-grid">
            {signageProjects.map(project => (
              <div key={project.id} className="gallery-item">
                <div className="gallery-image">
                  <span className="gallery-emoji">{project.image}</span>
                </div>
                <div className="gallery-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="gallery-tags">
                    <span className="gallery-tag">3D Signage</span>
                    <span className="gallery-tag">Banner Design</span>
                    <span className="gallery-tag">Digital Art</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact CTA */}
      <div className="graphic-cta">
        <h3>Need Custom Graphic Design?</h3>
        <p>Contact me for professional branding and signage solutions</p>
        <Link to="/#contact" className="cta-button">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

export default Graphic;