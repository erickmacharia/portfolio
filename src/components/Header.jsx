import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when screen resizes to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close menu on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>

      <nav className="desktop-nav">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="menu-btn" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About Me</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </header>
  );
}

export default Header;