import React, { useState, useEffect, useRef } from 'react';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const currentElement = servicesRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      {
        threshold: 0.04,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "💻",
      description: "Modern, responsive websites and web applications using React, Node.js, and modern frameworks.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Performance Optimization"],
      color: "#7FDBFF"
    },
    {
      id: 2,
      title: "Network Administration",
      icon: "🔧",
      description: "Secure and efficient network infrastructure setup, maintenance, and troubleshooting.",
      features: ["Network Security", "Server Configuration", "Cloud Services", "VPN Setup"],
      color: "#7FDBFF"
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "🎨",
      description: "User-centered design with modern aesthetics that enhance user experience and engagement.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
      color: "#7FDBFF"
    },
    {
      id: 4,
      title: "Graphic Design",
      icon: "🎨",
      description: "Creative visual design solutions for branding, marketing materials, and digital assets.",
      features: ["Matatu exterior & interior Design", "Logo Design & Brand Identity", "Marketing Materials", "Banners & 3D Signage"],
      color: "#7FDBFF"
    },
    {
      id: 5,
      title: "Full Stack Solutions",
      icon: "🚀",
      description: "End-to-end development from concept to deployment with full technical support.",
      features: ["Project Planning", "Development", "Testing", "Deployment"],
      color: "#7FDBFF"
    },
    {
      id: 6,
      title: "Technical Consultation",
      icon: "📊",
      description: "Expert advice on technology stack, architecture, and digital transformation strategies.",
      features: ["Tech Stack Selection", "Architecture Review", "Performance Audit", "Best Practices"],
      color: "#7FDBFF"
    },
    {
      id: 7,
      title: "Maintenance & Support",
      icon: "🛠️",
      description: "Ongoing maintenance, updates, and technical support for existing systems and applications.",
      features: ["Bug Fixes", "Updates", "Security Patches", "24/7 Support"],
      color: "#7FDBFF"
    }
  ];

  return (
    <section 
      id="services" 
      className={`services-section ${isVisible ? 'visible' : ''}`}
      ref={servicesRef}
    >
      <div className="container">
        {/* Section Title */}
        <div className="services-header">
          <h2 className="services-title">
            <span className="services-title-text">My Services</span>
            { /*<span className="services-title-reflection">My Services</span> */}
          </h2>
          <div className="services-title-line"></div>
          <p className="services-subtitle">
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${isVisible ? 'card-visible' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--card-color': service.color
              }}
            >
              <div className="service-card-inner">
                {/* Card Header */}
                <div className="service-card-header">
                  <div className="service-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                {/* Card Content */}
                <div className="service-card-content">
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h4 className="features-title">What's Included:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-bullet">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer 
                <div className="service-card-footer">
                  <button className="service-learn-more">
                    Learn More
                    <span className="arrow-icon">→</span>
                  </button>
                  <div className="service-hint">Click to explore</div>
                </div> */}

                {/* Card Decoration */}
                <div className="card-decoration"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`services-cta ${isVisible ? 'cta-visible' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-text">
              Let's discuss how I can help bring your ideas to life with professional digital solutions.
            </p>
            <a href="#contact" className="cta-button">
              Get in Touch
              <span className="cta-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;