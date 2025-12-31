import React, { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Use useMemo to prevent roles from changing on every render
  const roles = useMemo(() => [
    'Graphic Design',
    'Web Development',
    'Network Administration',
    'UI/UX Design'
  ], []); // Empty dependency array means it only creates once

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (!isDeleting) {
        // Typing forward
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
        
        if (text === currentRole) {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(100);
        
        if (text === '') {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="greeting">Hello, I'm</h3>
            <h1 className="name">Erick</h1>
            
            {/* Fixed Role Section - Two Lines with Typing */}
            <div className="role-container">
              <div className="role">
                <div className="static-line">Creative Person In</div>
                <div className="typing-line">
                  <span className="typing-text">{text}</span>
                  <span className="cursor">|</span>
                </div>
              </div>
            </div>
            
            <p className="description">
              Specializing in graphic design , network administration and web development with 
              5+ years of experience creating modern design, responsive web applications 
              and secure network infrastructures.
            </p>
            
            {/* Buttons */}
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-container">
              <div className="profile-image">
               <img src="./passport.png" alt="Erick" />
              </div>
              
              {/* Floating Elements */}
              <div className="floating-element circle-1"></div>
              <div className="floating-element circle-2"></div>
              <div className="floating-element square-1"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="background-animation">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-square bg-square-1"></div>
        <div className="bg-square bg-square-2"></div>
      </div>
    </section>
  );
};

export default Hero;