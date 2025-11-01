import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Modern Villa',
      category: 'residential',
      description: 'A stunning contemporary villa with panoramic views',
      fullDescription: 'This modern villa represents the perfect blend of luxury and sustainability. Featuring floor-to-ceiling windows, the design maximizes natural light while offering breathtaking panoramic views. The open-plan living spaces seamlessly connect indoor and outdoor areas, creating a harmonious living environment. Every detail has been carefully considered to provide the ultimate in comfort and style.',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80'
      ],
      year: '2024',
      location: 'Colombo, Sri Lanka',
      area: '450 sqm',
      client: 'Private Client',
      duration: '18 months'
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'commercial',
      description: 'Sustainable office space with innovative design',
      fullDescription: 'An innovative corporate workspace designed with sustainability at its core. The building features energy-efficient systems, green spaces, and collaborative work areas that promote productivity and employee well-being. Modern amenities and smart technology integration create an inspiring work environment that enhances creativity and collaboration.',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80'
      ],
      year: '2024',
      location: 'Galle, Sri Lanka',
      area: '1200 sqm',
      client: 'Corporate Group',
      duration: '24 months'
    },
    {
      id: 3,
      title: 'Urban Apartment',
      category: 'residential',
      description: 'Minimalist apartment in the heart of the city',
      fullDescription: 'A sophisticated urban apartment showcasing minimalist design principles. Clean lines, neutral colors, and carefully curated furnishings create a serene living space. Smart storage solutions maximize functionality while maintaining the aesthetic appeal of the contemporary design. This space proves that less is truly more.',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80'
      ],
      year: '2023',
      location: 'Kandy, Sri Lanka',
      area: '180 sqm',
      client: 'Private Client',
      duration: '12 months'
    },
    {
      id: 4,
      title: 'Luxury Hotel',
      category: 'hospitality',
      description: 'Five-star boutique hotel with unique architecture',
      fullDescription: 'An exquisite boutique hotel that combines luxury with local architectural heritage. Each space is thoughtfully designed to provide guests with a memorable experience. The integration of traditional craftsmanship with modern amenities creates a unique and sophisticated atmosphere that celebrates Sri Lankan culture and hospitality.',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80'
      ],
      year: '2023',
      location: 'Bentota, Sri Lanka',
      area: '2500 sqm',
      client: 'Hospitality Group',
      duration: '30 months'
    },
    {
      id: 5,
      title: 'Shopping Complex',
      category: 'commercial',
      description: 'Modern retail space with open concept design',
      fullDescription: 'A contemporary shopping complex featuring an innovative open-concept design. The architectural approach emphasizes natural lighting and flowing circulation patterns. Sustainable materials and energy-efficient systems ensure minimal environmental impact while providing an exceptional shopping experience for visitors and tenants alike.',
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80',
        'https://images.unsplash.com/photo-1519874179391-3ebc752241dd?w=1200&q=80',
        'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=1200&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80'
      ],
      year: '2024',
      location: 'Negombo, Sri Lanka',
      area: '3000 sqm',
      client: 'Retail Development Corp',
      duration: '28 months'
    },
    {
      id: 6,
      title: 'Beach House',
      category: 'residential',
      description: 'Coastal retreat with seamless indoor-outdoor living',
      fullDescription: 'A stunning beachfront residence designed to embrace coastal living. Large sliding glass doors blur the boundaries between interior and exterior spaces. The design incorporates natural ventilation, shaded terraces, and materials that withstand the coastal climate while maintaining elegance. Perfect for year-round tropical living.',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
      ],
      year: '2023',
      location: 'Mirissa, Sri Lanka',
      area: '350 sqm',
      client: 'Private Client',
      duration: '15 months'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-details-page">
      {/* Hero Image Section */}
      <div className="project-hero">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Projects
        </button>
        <div className="hero-image-container">
          <img 
            src={project.images[currentImageIndex]} 
            alt={project.title}
            className="hero-image"
          />
          <button className="gallery-nav-btn prev-btn" onClick={prevImage}>‹</button>
          <button className="gallery-nav-btn next-btn" onClick={nextImage}>›</button>
          
          <div className="image-indicators">
            {project.images.map((_, index) => (
              <span 
                key={index}
                className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Information Section */}
      <div className="project-content">
        <div className="container">
          <div className="project-header">
            <div className="project-title-section">
              <span className="project-category-badge">{project.category}</span>
              <h1>{project.title}</h1>
              <p className="project-subtitle">{project.description}</p>
            </div>

            <div className="project-meta-grid">
              <div className="meta-card">
                <span className="meta-icon">📍</span>
                <div>
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{project.location}</span>
                </div>
              </div>
              <div className="meta-card">
                <span className="meta-icon">📅</span>
                <div>
                  <span className="meta-label">Year</span>
                  <span className="meta-value">{project.year}</span>
                </div>
              </div>
              <div className="meta-card">
                <span className="meta-icon">📐</span>
                <div>
                  <span className="meta-label">Area</span>
                  <span className="meta-value">{project.area}</span>
                </div>
              </div>
              <div className="meta-card">
                <span className="meta-icon">👤</span>
                <div>
                  <span className="meta-label">Client</span>
                  <span className="meta-value">{project.client}</span>
                </div>
              </div>
              <div className="meta-card">
                <span className="meta-icon">⏱️</span>
                <div>
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{project.duration}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-description-section">
            <h2>About This Project</h2>
            <p>{project.fullDescription}</p>
          </div>

          {/* Image Gallery Grid */}
          <div className="project-gallery-section">
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="gallery-item"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`${project.title} - ${index + 1}`} />
                  <div className="gallery-overlay">
                    <span>View Full Size</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project-contact-cta">
            <h2>Interested in a Similar Project?</h2>
            <p>Let's discuss how we can bring your architectural vision to life.</p>
            <button className="cta-button" onClick={() => {
              navigate('/', { state: { scrollTo: 'contact' } });
            }}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
