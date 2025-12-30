import React, { useState, useEffect, useRef } from 'react';
import { 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiMessageSquare,
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiHeart
} from 'react-icons/fi';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const footerRef = useRef(null);

  useEffect(() => {
    const currentElement = footerRef.current;
    
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
        threshold: 0.02,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Year update check
    const yearInterval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 60000);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      clearInterval(yearInterval);
    };
  }, [currentYear]);

  const quickLinks = [
    { icon: <FiHome />, label: 'Home', href: '#home' },
    { icon: <FiUser />, label: 'About', href: '#about' },
    { icon: <FiBriefcase />, label: 'Projects', href: '#projects' },
    { icon: <FiMessageSquare />, label: 'Testimonials', href: '#testimonials' },
    { icon: <FiMail />, label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FiTwitter />, label: 'Twitter/X', href: 'https://twitter.com', color: '#000000' },
    { icon: <FiMail />, label: 'Gmail', href: 'mailto:ngutu64@gmail.com', color: '#EA4335' },
    { icon: <FiInstagram />, label: 'Instagram', href: 'https://instagram.com', color: '#E4405F' },
    { icon: <FiYoutube />, label: 'TikTok', href: 'https://tiktok.com', color: '#000000' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0077B5' },
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com', color: '#333333' }
  ];

  return (
    <footer 
      className={`footer-section ${isVisible ? 'visible' : ''}`}
      ref={footerRef}
    >
      <div className="footer-bg-animation"></div>
      <div className="container">
       
        {/* Three Column Layout */}
        <div className="footer-columns">
          {/* Column 1: Portfolio Description */}
          <div className="footer-column">
            <h3 className="column-title">
              <span className="title-icon">✨</span>
              Portfolio
            </h3>
            <div className="portfolio-description">
              <p className="description-text">
                Graphic Designer, Full-stack Developer & Network Security Specialist 
                crafting innovative digital solutions with cutting-edge technology. 
                Passionate about building scalable, secure, and user-friendly applications 
                that bridge beautiful design with robust infrastructure.
              </p>
              <div className="tech-tags">
                {/*fullstack web development technologies*/}
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">Html5 & Css3</span>
                <span className="tech-tag">UI/UX</span>
                <span className="tech-tag">PostgreySQL</span>
                <span className="tech-tag">RESTful APIs</span>
                <span className="tech-tag">Git & GitHub</span>
                <span className="tech-tag">Responsive Web Design</span>

                {/*networking ccna & ccnp technologies*/}
                <span className="tech-tag">Cisco Networking</span>
                <span className="tech-tag">Network Security</span>
                <span className="tech-tag">VPN Configuration</span>
                <span className="tech-tag">"Network Design</span>
                <span className="tech-tag">Routing & Switching</span>
                <span className="tech-tag">Network Troubleshooting</span>

                {/*Design Skills*/}
                <span className="tech-tag">UI/UX Design</span>
                <span className="tech-tag">Graphic Design</span>
                <span className="tech-tag">Logo & Brand Identity</span>
                <span className="tech-tag">Adobe Creative Suite</span>
                <span className="tech-tag">Figma/Adobe XD</span>

              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="column-title">
              <span className="title-icon">🔗</span>
              Quick Links
            </h3>
            <div className="quick-links">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="quick-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-label">{link.label}</span>
                </a>
              ))}
            </div>
            <div className="current-year-display">
              <span className="year-icon">📅</span>
              <span className="year-text">Get Ready For Your Project Year: {currentYear}</span>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div className="footer-column">
            <h3 className="column-title">
              <span className="title-icon">🤝</span>
              Connect
            </h3>
            <p className="connect-subtitle">
              Let's work together to bring your ideas to life.
            </p>
            <div className="social-links-grid">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="social-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-link-icon">
                    {social.icon}
                  </div>
                  <span className="social-link-label">{social.label}</span>
                </a>
              ))}
            </div>
            <div className="email-cta">
              <FiMail className="email-icon" />
              <a href="mailto:ngutu64@gmail.com" className="email-link">
                ngutu64@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <div className="copyright-content">
            <p className="copyright-text">
              © {currentYear} <span className="name">Erick Ngutu Macharia</span>. All rights reserved, to this 
              amazing portfolio website creator .
            </p>
            <p className="made-with">
              Made with Love <FiHeart className="heart-icon" /> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;