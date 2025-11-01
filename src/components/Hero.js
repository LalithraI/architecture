import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project images for background slideshow
  const backgroundImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1920&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80'
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="hero" id="home">
      {/* Background Images Slideshow */}
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
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
