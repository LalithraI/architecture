import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Modern Villa',
      category: 'residential',
      description: 'A stunning contemporary villa with panoramic views',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      year: '2024'
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'commercial',
      description: 'Sustainable office space with innovative design',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      year: '2024'
    },
    {
      id: 3,
      title: 'Urban Apartment',
      category: 'residential',
      description: 'Minimalist apartment in the heart of the city',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      year: '2023'
    },
    {
      id: 4,
      title: 'Luxury Hotel',
      category: 'hospitality',
      description: 'Five-star boutique hotel with unique architecture',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      year: '2023'
    },
    {
      id: 5,
      title: 'Shopping Complex',
      category: 'commercial',
      description: 'Modern retail space with open concept design',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
      year: '2024'
    },
    {
      id: 6,
      title: 'Beach House',
      category: 'residential',
      description: 'Coastal retreat with seamless indoor-outdoor living',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className={`projects ${isVisible ? 'visible' : ''}`} id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Explore our portfolio of exceptional architectural designs</p>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveFilter('residential')}
          >
            Residential
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('commercial')}
          >
            Commercial
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'hospitality' ? 'active' : ''}`}
            onClick={() => setActiveFilter('hospitality')}
          >
            Hospitality
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-year">{project.year}</span>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
