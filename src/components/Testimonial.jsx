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
  // 🌍 INTERNATIONAL CLIENTS (continued IDs)
  {
    id: 11,
    name: "David Chen",
    role: "Product Manager",
    company: "ShopFlow Inc. (USA)",
    image: "🌎",
    rating: 5,
    text: "Erick developed our e-commerce platform remotely. His communication was clear despite the time difference, and he delivered ahead of schedule. The M-Pesa integration he suggested was a game-changer for our African expansion.",
    project: "E-Commerce Platform",
    matchesProjectId: 2
  },
  {
    id: 12,
    name: "Sarah Williams",
    role: "Tech Lead",
    company: "FinTech Solutions UK",
    image: "🇬🇧",
    rating: 5,
    text: "Hired Erick for UI/UX consultation on our banking app. His insights on user behavior and clean design were exceptional. We're now working with him on our next project.",
    project: "Banking System UI",
    matchesProjectId: 8
  },
  {
    id: 13,
    name: "Michael Okafor",
    role: "CTO",
    company: "PayStack (Nigeria)",
    image: "🇳🇬",
    rating: 5,
    text: "Erick's network security expertise is world-class. He helped us implement robust firewall policies across our infrastructure. One of the best remote engineers we've worked with.",
    project: "Network Security Dashboard",
    matchesProjectId: 5
  },
  // 🇰🇪 LOCAL CLIENTS
  {
    id: 1,
    name: "Alex Mwangi",
    role: "Operations Manager",
    company: "Super Metro Sacco",
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
    matchesProjectId: 5
  },
  {
    id: 4,
    name: "Martha Achieng",
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
  {
    id: 7,
    name: "Brian Kipchumba",
    role: "Fleet Manager",
    company: "City Hoppa",
    image: "🚌",
    rating: 5,
    text: "Erick redesigned our entire matatu fleet interior and exterior. Passengers love the fresh look and our brand visibility has never been better.",
    project: "Full Fleet Rebranding",
    matchesProjectId: 9
  },
  {
    id: 8,
    name: "Lucy Wanjiku",
    role: "Shop Owner",
    company: "Downtown Boutique",
    image: "👗",
    rating: 5,
    text: "Needed 3D signage for my shop urgently. Erick delivered within 3 days and installation was seamless. Customers find my shop easily now.",
    project: "3D Shop Signage",
    matchesProjectId: 10
  },
  {
    id: 9,
    name: "Peter Mbugua",
    role: "Systems Administrator",
    company: "Nairobi Hospital",
    image: "🏥",
    rating: 5,
    text: "Erick helped us secure our hospital network infrastructure. His CCNA expertise identified vulnerabilities we didn't know existed. Zero incidents since implementation.",
    project: "Network Security Audit",
    matchesProjectId: 5
  },
  {
    id: 10,
    name: "Hassan Ali",
    role: "Small Business Owner",
    company: "Fresh Mart",
    image: "🛒",
    rating: 4,
    text: "Started with a simple logo, now Erick handles all my marketing materials - banners, posters, social media graphics. Affordable and quality work.",
    project: "Brand Identity Package",
    matchesProjectId: 10
  },
  
  
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