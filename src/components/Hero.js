import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Designing</span>
          <span className="title-line">Tomorrow's</span>
          <span className="title-line highlight">Architecture</span>
        </h1>
        <p className="hero-subtitle">
          Creating innovative spaces that blend functionality with aesthetic excellence
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
