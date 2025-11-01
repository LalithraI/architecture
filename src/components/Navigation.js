import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
          <span className="logo-icon">◬</span>
          <span className="logo-text">CHAMODA DEWNITH</span>
        </a>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={(e) => scrollToSection(e, 'projects')}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>

        <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
