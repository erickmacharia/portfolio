import React, { useState, useEffect, useRef } from 'react';
import { 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiGithub,
  FiFacebook,
  FiInstagram
} from 'react-icons/fi';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const currentElement = contactRef.current;
    
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
        threshold: 0.1,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/ngutu64@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          _subject: 'New Message from Portfolio Website',
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        form.reset(); // Clear the form
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="info-icon-svg" />,
      title: "Email",
      value: "ngutu64@gmail.com",
      link: "mailto:ngutu64@gmail.com"
    },
    {
      icon: <FiLinkedin className="info-icon-svg" />,
      title: "LinkedIn",
      value: "linkedin.com/in/erick-macharia-4b911696",
      link: "https://linkedin.com/in/erick-macharia-4b911696"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Nairobi, Kenya",
      link: "https://www.google.com/maps/place/Nairobi"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+254715476304",
      link: "tel:+254715476304"
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="social-icon-svg" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/erick-macharia-4b911696",
      color: "#0077B5"
    },
    {
      icon: <FiGithub className="social-icon-svg" />,
      label: "GitHub",
      link: "https://github.com",
      color: "#333333"
    },
    {
      icon: <FiMail className="social-icon-svg" />,
      label: "Gmail",
      link: "mailto:ngutu64@gmail.com",
      color: "#EA4335"
    },
    {
      icon: <FiFacebook className="social-icon-svg" />,
      label: "Facebook",
      link: "https://facebook.com",
      color: "#1877F2"
    },
    {
      icon: <FiInstagram className="social-icon-svg" />,
      label: "Instagram",
      link: "https://instagram.com",
      color: "#E4405F"
    },
    {
      icon: <FiTwitter className="social-icon-svg" />,
      label: "Twitter/X",
      link: "https://twitter.com",
      color: "#000000"
    }
  ];

  return (
    <section 
      id="contact" 
      className={`contact-section ${isVisible ? 'visible' : ''}`}
      ref={contactRef}
    >
      <div className="container">
        {/* Section Title */}
        <div className="contact-header">
          <h2 className="contact-title">
            <span className="contact-title-text">Get In Touch</span>
          </h2>
          <div className="contact-title-line"></div>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className={`contact-form-wrapper ${isVisible ? 'form-visible' : ''}`}>
            <div className="contact-form-card">
              <div className="form-header">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                {/* FormSubmit Hidden Fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Message from Portfolio Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{display: 'none'}} />
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span className="label-icon">👤</span>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-icon">📧</span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    <span className="label-icon">📝</span>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <span className="label-icon">💬</span>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  />
                </div>

                <div className="form-submit">
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="send-icon">✉️</span>
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <span className="success-icon">✅</span>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="success-message error">
                      <span className="success-icon">❌</span>
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`contact-info-wrapper ${isVisible ? 'info-visible' : ''}`}>
            <div className="contact-info-card">
              <div className="info-header">
                <h3 className="info-title">Contact Information</h3>
                <p className="info-subtitle">Feel free to reach out through any of these channels.</p>
              </div>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    className="contact-info-item"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="info-icon-wrapper">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h4 className="info-item-title">{info.title}</h4>
                      <p className="info-item-value">{info.value}</p>
                    </div>
                    <div className="info-arrow">→</div>
                  </a>
                ))}
              </div>

              <div className="contact-hours">
                <h4 className="hours-title">Response Time</h4>
                <p className="hours-text">
                  I typically respond to emails within <strong>24 hours</strong> on weekdays.
                  For urgent matters, feel free to call or text.
                </p>
              </div>

              <div className="social-links">
                <h4 className="social-title">Connect With Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link} 
                      className="social-icon"
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ '--social-color': social.color }}
                    >
                      <div className="social-icon-wrapper">
                        {social.icon}
                      </div>
                      <span className="social-label">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;