import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
      fullDescription: 'This modern villa represents the perfect blend of luxury and sustainability. Featuring floor-to-ceiling windows, the design maximizes natural light while offering breathtaking panoramic views. The open-plan living spaces seamlessly connect indoor and outdoor areas, creating a harmonious living environment.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80'
      ],
      year: '2024',
      location: 'Colombo, Sri Lanka',
      area: '450 sqm'
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'commercial',
      description: 'Sustainable office space with innovative design',
      fullDescription: 'An innovative corporate workspace designed with sustainability at its core. The building features energy-efficient systems, green spaces, and collaborative work areas that promote productivity and employee well-being. Modern amenities and smart technology integration create an inspiring work environment.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80'
      ],
      year: '2024',
      location: 'Galle, Sri Lanka',
      area: '1200 sqm'
    },
    {
      id: 3,
      title: 'Urban Apartment',
      category: 'residential',
      description: 'Minimalist apartment in the heart of the city',
      fullDescription: 'A sophisticated urban apartment showcasing minimalist design principles. Clean lines, neutral colors, and carefully curated furnishings create a serene living space. Smart storage solutions maximize functionality while maintaining the aesthetic appeal of the contemporary design.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80'
      ],
      year: '2023',
      location: 'Kandy, Sri Lanka',
      area: '180 sqm'
    },
    {
      id: 4,
      title: 'Luxury Hotel',
      category: 'hospitality',
      description: 'Five-star boutique hotel with unique architecture',
      fullDescription: 'An exquisite boutique hotel that combines luxury with local architectural heritage. Each space is thoughtfully designed to provide guests with a memorable experience. The integration of traditional craftsmanship with modern amenities creates a unique and sophisticated atmosphere.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80'
      ],
      year: '2023',
      location: 'Bentota, Sri Lanka',
      area: '2500 sqm'
    },
    {
      id: 5,
      title: 'Shopping Complex',
      category: 'commercial',
      description: 'Modern retail space with open concept design',
      fullDescription: 'A contemporary shopping complex featuring an innovative open-concept design. The architectural approach emphasizes natural lighting and flowing circulation patterns. Sustainable materials and energy-efficient systems ensure minimal environmental impact while providing an exceptional shopping experience.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80',
        'https://images.unsplash.com/photo-1519874179391-3ebc752241dd?w=1200&q=80',
        'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=1200&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80'
      ],
      year: '2024',
      location: 'Negombo, Sri Lanka',
      area: '3000 sqm'
    },
    {
      id: 6,
      title: 'Beach House',
      category: 'residential',
      description: 'Coastal retreat with seamless indoor-outdoor living',
      fullDescription: 'A stunning beachfront residence designed to embrace coastal living. Large sliding glass doors blur the boundaries between interior and exterior spaces. The design incorporates natural ventilation, shaded terraces, and materials that withstand the coastal climate while maintaining elegance.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
      ],
      year: '2023',
      location: 'Mirissa, Sri Lanka',
      area: '350 sqm'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (projectId) => {
    console.log('Navigating to project:', projectId);
    navigate(`/project/${projectId}`);
  };

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
              onClick={() => handleProjectClick(project.id)}
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
