import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Awards Won' }
  ];

  return (
    <section className={`about ${isVisible ? 'visible' : ''}`} id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Our Studio</h2>
            <p className="about-description">
              With over two decades of experience in architectural design, we specialize in 
              creating innovative spaces that seamlessly blend form and function. Our approach 
              combines timeless design principles with cutting-edge technology to deliver 
              exceptional results.
            </p>
            <p className="about-description">
              We believe that great architecture has the power to transform lives and communities. 
              Each project is a unique journey where we collaborate closely with our clients to 
              bring their vision to life, ensuring every detail reflects their needs and aspirations.
            </p>
            
            <div className="features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-content">
                  <h3>Sustainable Design</h3>
                  <p>Eco-friendly solutions that minimize environmental impact</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-content">
                  <h3>Innovative Solutions</h3>
                  <p>Creative approaches to complex architectural challenges</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-content">
                  <h3>Client-Focused</h3>
                  <p>Personalized service tailored to your unique requirements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
              alt="Architecture Studio" 
            />
            <div className="image-decoration"></div>
          </div>
        </div>

        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
