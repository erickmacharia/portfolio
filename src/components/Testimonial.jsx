import React, { useState, useEffect, useRef } from 'react';

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const currentElement = testimonialsRef.current;
    
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

 const testimonials = [
  {
    id: 1,
    name: "Alex Mwangi",
    role: "Operations Manager",
    company: "City Shuttle Sacco",
    image: "🚌",
    rating: 5,
    text: "Erick's matatu branding transformed our fleet. The designs are eye-catching and professional. Our daily revenue increased significantly!",
    project: "Matatu Branding Package",
    matchesProjectId: 9
  },
  {
    id: 2,
    name: "Grace Ndirangu",
    role: "Business Owner",
    company: "Online Fashion Store",
    image: "🛍️",
    rating: 5,
    text: "The e-commerce platform Erick built is perfect for my business. Easy to manage, secure payments, and beautiful design that customers love.",
    project: "E-Commerce Platform",
    matchesProjectId: 1
  },
  {
    id: 3,
    name: "James Otieno",
    role: "IT Director",
    company: "Local Corporation",
    image: "🛡️",
    rating: 5,
    text: "Erick's network security implementation is top-notch. His CCNA/CCNP knowledge saved us from potential security breaches.",
    project: "Network Security Dashboard",
    matchesProjectId: 2
  },
  {
    id: 4,
    name: "Marthar Achieng",
    role: "Marketing Manager",
    company: "Conference Organizers",
    image: "📢",
    rating: 4,
    text: "Our event banners and 3D signage designed by Erick were the talk of the conference. Professional quality and quick turnaround.",
    project: "Digital Signage & Banners",
    matchesProjectId: 10
  },
  {
    id: 5,
    name: "Faridah Hassan",
    role: "Project Manager",
    company: "Software Company",
    image: "💼",
    rating: 5,
    text: "Erick's task management app streamlined our workflow. The real-time features and clean interface improved our team's productivity by 40%.",
    project: "Task Management App",
    matchesProjectId: 3
  },
  {
    id: 6,
    name: "Eunice Olumbe",
    role: "Digital Services Head",
    company: "Local Bank",
    image: "🏦",
    rating: 4,
    text: "The banking UI Erick designed is intuitive and user-friendly. Our customer satisfaction scores improved dramatically after launch.",
    project: "Banking System UI",
    matchesProjectId: 8
  },
  {  // ← ADDED THIS OPENING BRACE
    id: 7,
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional. They delivered our project ahead of schedule with zero bugs.",
    project: "Enterprise CRM System"
  },
  {
    id: 8,
    name: "Michael Chen",
    role: "Lead Developer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "One of the most skilled developers I've worked with. The network security solution they implemented reduced our vulnerabilities by 95%. Highly recommended!",
    project: "Network Security Platform"
  },
  {
    id: 9,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Apple",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "The UI/UX designs were stunning and highly intuitive. User engagement increased by 40% after implementing their design recommendations.",
    project: "Mobile Banking App"
  },
  {
    id: 10,
    name: "David Wilson",
    role: "Founder & CEO",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Their full-stack expertise helped us build our MVP in record time. The code quality is excellent and the architecture is scalable.",
    project: "E-commerce Platform"
  },
  {
    id: 11,
    name: "Lisa Thompson",
    role: "Senior Director",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Outstanding work on our cloud migration project. They handled complex AWS infrastructure with ease and provided thorough documentation.",
    project: "Cloud Migration"
  },
  {
    id: 12,
    name: "Robert Garcia",
    role: "Engineering Manager",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "The API gateway they built handles millions of requests daily with 99.99% uptime. Their microservices architecture is impressive.",
    project: "API Gateway System"
  }
];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        {index < rating ? '⭐' : '☆'}
      </span>
    ));
  };

  return (
    <section 
      id="testimonials" 
      className={`testimonials-section ${isVisible ? 'visible' : ''}`}
      ref={testimonialsRef}
    >
      <div className="container">
        {/* Section Title */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            <span className="testimonials-title-text">Client Testimonials</span>
            {/* <span className="testimonials-title-reflection">Client Testimonials</span> */}
          </h2>
          <div className="testimonials-title-line"></div>
          <p className="testimonials-subtitle">
            What clients and colleagues say about working with me
          </p>
        </div>

        {/* Testimonials Grid - 2 Columns */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${isVisible ? 'card-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-card-inner">
                {/* Quote Icon */}
                <div className="quote-icon">❝</div>
                
                {/* Rating */}
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="testimonial-text">"{testimonial.text}"</p>
                
                {/* Project Info */}
                <div className="testimonial-project">
                  <span className="project-label">Project:</span>
                  <span className="project-name">{testimonial.project}</span>
                </div>
                
                {/* Client Info */}
                <div className="testimonial-client">
                  <div className="client-avatar">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="client-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0D8ABC&color=fff&size=200`;
                      }}
                    />
                  </div>
                  <div className="client-info">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-role">{testimonial.role}</p>
                    <p className="client-company">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Card Hover Effect */}
                <div className="testimonial-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;