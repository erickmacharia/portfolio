import React, { useState, useEffect, useRef } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Store the ref value in a variable to avoid ESLint warning
    const currentElement = aboutRef.current;
    
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

  return (
    <section 
      id="about" 
      className={`about-section ${isVisible ? 'slide-in' : ''}`}
      ref={aboutRef}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">About Me</span>
           {/* <span className="title-reflection">About Me</span> */}
          </h2>
          <div className="title-line"></div>
        </div>

        {/* Content */}
        <div className="about-content">
          {/* Left Side - Computer Image */}
          <div className="about-image">
            <div className="computer-container">
              <div className="computer-screen">
                <div className="screen-content">
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="terminal-cursor"></div>
                </div>
              </div>
              <div className="computer-base"></div>
              <div className="computer-keyboard"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-icon code-icon">{"</>"}</div>
            <div className="floating-icon network-icon">🌐</div>
            <div className="floating-icon design-icon">🎨</div>
          </div>

          {/* Right Side - Description */}
          <div className="about-description">
            <div className="description-card">
              <h3 className="description-title">
                Passionate Designer, Developer & Network Specialist
              </h3>
              
              <div className="description-text">
                <p>
                  Hello! I'm <span className="highlight">Erick</span>, a creative professional with expertise in 
                  <span className="highlight"> graphic design, web development</span> and 
                  <span className="highlight"> network administration</span>. 
                  With over 5 years of experience, I bridge the gap between beautiful design 
                  and robust technical infrastructure.
                </p>
                
                <p>
                   My journey started with a fascination for how things work on the internet,
                   leading me to complete an undergraduate degree in Telecommunication and Information Technology. 
                   This evolved into a passion for creating seamless digital experiences, 
                   crafting visually compelling designs, and ensuring secure and efficient network operations.
                </p>
              </div>

              {/* Stats */}
              <div className="stats-section">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;