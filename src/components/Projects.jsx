import React, { useState, useEffect, useRef } from 'react';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);

  useEffect(() => {
    const currentElement = projectsRef.current;
    
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
        threshold: 0.04,
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

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'graphic', name: 'Graphic Design' }, 
    { id: 'design', name: 'UI/UX Design' },
    { id: 'web', name: 'Web Development' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'network', name: 'Network' },
  ];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "web",
      description: "Modern portfolio website with smooth animations and responsive design.",
      image: "🎨",
      tags: ["React", "CSS3", "Animations", "Responsive"],
      link: "#home",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "A full-featured online store with shopping cart, user authentication, and payment integration.",
      image: "🛒",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      link: "https://www.kikuu.com/",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      category: "fullstack",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "📋",
      tags: ["React", "Express", "Socket.io", "JWT", "MongoDB"],
      link: "https://your-task-app-demo.com",
      featured: true
    },
    {
      id: 4,
      title: "API Gateway",
      category: "fullstack",
      description: "Microservices API gateway with rate limiting, authentication, and monitoring.",
      image: "🔌",
      tags: ["Node.js", "Redis", "Docker", "Kubernetes", "Express"],
      link: "https://your-apigateway-demo.com",
      featured: true
    },
    {
      id: 5,
      title: "Network Security Dashboard",
      category: "network",
      description: "Real-time network monitoring system with threat detection and automated alerts.",
      image: "🛡️",
      tags: ["Python", "SQL", "Linux", "Security"],
      link: "https://your-network-dashboard.com",
      featured: true
    },
    {
      id: 6,
      title: "Weather App",
      category: "web",
      description: "Beautiful weather application with location detection and detailed forecasts.",
      image: "☁️",
      tags: ["JavaScript", "API", "CSS", "Geolocation"],
      link: "https://weather.metoffice.gov.uk/forecast/kzf0v2ucw#?date=2025-12-29",
      featured: true
    },
    {
      id: 7,
      title: "VPN Configuration System",
      category: "network",
      description: "Automated VPN setup and management system for enterprise networks.",
      image: "🔐",
      tags: ["Linux", "Bash", "Networking", "Security"],
      link: "https://your-vpn-system.com",
      featured: true
    },
    {
      id: 8,
      title: "Banking System UI",
      category: "design",
      description: "Modern banking interface with intuitive navigation and transaction features.",
      image: "🏦",
      tags: ["Figma", "UI Design", "Prototyping", "User Testing"],
      link: "https://www.absa.co.ug/personal/",
      featured: true
    },
    {
      id: 9,
      title: "Matatu Branding Package",
      category: "graphic",
      description: "Complete branding package for public transport vehicle including exterior design and logo.",
      image: "🚌",
      tags: ["Logo Design", "Brand Identity", "Vehicle Wrap", "Print Design"],
      details: [
        "✓ Matatu exterior & interior Design",
        "✓ Logo Design & Brand Identity", 
        "✓ Marketing Materials",
        "✓ Digital Assets" ],
      link: "https://www.facebook.com/share/1G6suiA9Lu/",
      featured: true
    },
    {
      id: 10,
      title: "Digital Signage & Banners",
      category: "graphic",
      description: "Professional banners, 3D signage, and digital art products for businesses and events.",
      image: "🎨",
      tags: ["3D Signage", "Banner Design", "Digital Art", "Print Ready"],
      details: [
        "✓ 3D Signage Design",
        "✓ Event Banners & Posters", 
        "✓ Business Signage",
        "✓ Digital Art Products"
      ],
      link: "https://www.facebook.com/share/1G6suiA9Lu/",
      featured: true
    },
    {
      id: 11,
      title: "Enterprise Network Design",
      category: "network",
      description: "Complete enterprise network design with VLANs, routing protocols, and security implementations for CCNA/CCNP.",
      image: "🏢",
      tags: ["CCNA", "CCNP", "VLAN", "OSPF", "EIGRP", "Security"],
      details: [
        "✓ Multi-VLAN Network Design",
        "✓ OSPF & EIGRP Routing Configuration", 
        "✓ ACL & Security Implementation",
        "✓ Network Documentation"
      ],
      link: "https://your-network-design.com",
      featured: true
    },
    {
      id: 12,
      title: "VPN & Network Security Lab",
      category: "network",
      description: "Site-to-Site VPN configuration with firewall security policies and intrusion prevention.",
      image: "🔒",
      tags: ["VPN", "Firewall", "Security", "CCNP", "IPSec"],
      details: [
        "✓ Site-to-Site VPN Configuration",
        "✓ Firewall Security Policies", 
        "✓ Intrusion Prevention System",
        "✓ Network Monitoring Setup"
      ],
      link: "https://your-vpn-lab.com",
      featured: true
    },
    {
      id: 13,
      title: "Cisco Packet Tracer Labs",
      category: "network",
      description: "Various network simulations including LAN/WAN configurations, routing protocols, and troubleshooting.",
      image: "🖧",
      tags: ["Packet Tracer", "LAN/WAN", "Troubleshooting", "CCNA"],
      details: [
        "✓ LAN Switching & STP Configuration",
        "✓ WAN Technologies Implementation", 
        "✓ Network Troubleshooting Scenarios",
        "✓ DHCP & DNS Server Setup"
      ],
      link: "https://your-packet-tracer-labs.com",
      featured: true
    },
    {
      id: 14,
      title: "Network Automation Scripts",
      category: "network",
      description: "Python scripts for network device configuration, monitoring, and automated troubleshooting.",
      image: "🤖",
      tags: ["Python", "Automation", "Netmiko", "Ansible", "CCNP"],
      details: [
        "✓ Device Configuration Automation",
        "✓ Network Monitoring Scripts", 
        "✓ Backup & Restore Automation",
        "✓ Performance Monitoring"
      ],
      link: "https://your-network-automation.com",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      className={`projects-section ${isVisible ? 'visible' : ''}`}
      ref={projectsRef}
    >
      <div className="container">
        {/* Section Title */}
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="projects-title-text">My Projects</span>
          </h2>
          <div className="projects-title-line"></div>
          <p className="projects-subtitle">
            Showcasing my expertise through real-world applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`projects-filters ${isVisible ? 'filters-visible' : ''}`}>
          <div className="filters-container">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
                {activeFilter === filter.id && <span className="filter-indicator"></span>}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="project-card-inner">
                {/* Project Image */}
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="project-emoji">{project.image}</span>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span className="star-icon">⭐</span>
                      Featured
                    </div>
                  )}
                  
                  <div className="project-overlay">
                    <a 
                      href={project.link}
                      className="quick-view-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      Quick View
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-category">
                    <span className="category-badge">{project.category}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Project Hover Effect */}
                <div className="project-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Stats Section - Only if you want it 
        <div className={`projects-stats ${isVisible ? 'stats-visible' : ''}`}>
          <div className="stat-item">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Total Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {projects.filter(p => p.featured).length}
            </span>
            <span className="stat-label">Featured</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{filters.length - 1}</span>
            <span className="stat-label">Categories</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;