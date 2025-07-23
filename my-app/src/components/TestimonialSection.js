

import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anthom Bu Spar",
      role: "MARKETING MANAGER",
      text: "Consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits.",
      image: "/assets/banner10.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Matthew J.Wyman",
      role: "SENIOR CONSULTANT",
      text: "Targeting consultation discover apartments. Indulgence off under folly death wrote cause her way spite, Plan upon yet way get cold spot its week,",
      image: "/assets/banner11.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Metho K.Partho",
      role: "SENIOR DEVELOPER",
      text: "Business discover apartments, Indulgence off under folly death wrote cause her way spite, Plan upon yet way get cold spot its week, Almost do am or limits hearts.",
      image: "/assets/banner12.jpg",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentData = testimonials[currentTestimonial];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-warning" : "text-muted"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="testimonials-section py-5" style={{
      background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div
        className="grass-bg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          backgroundImage: 'url("https://agrica-react.vercel.app/assets/img/shape/13.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          opacity: 0.9
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(248,249,250,0.8) 0%, transparent 50%)'
        }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-0">
              Testimonials
              <div
                style={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ffc107, #ff9800)',
                  margin: '10px auto',
                  borderRadius: '2px'
                }}
              />
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="testimonial-card bg-white rounded-4 shadow-lg p-4 p-md-5 position-relative" style={{ marginBottom: '100px', overflow: 'visible' }}>

              
              <div
                className="position-absolute"
                style={{
                  top: '-50px',
                  left: '-50px',
                  zIndex: 3
                }}
              >
                <img
                  src={currentData.image}
                  alt={currentData.name}
                  style={{
                    width: '300px',
                    height: '240px',
                    objectFit: 'cover',
                    border: '6px solid #fff',
                    borderRadius: '18px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                />
              </div>

              <div className="row">
                <div className="col">
                  <div className="testimonial-content" style={{ paddingLeft: '280px' }}>
                    <div className="mb-3">
                      <span
                        className="text-warning display-3"
                        style={{
                          fontFamily: 'Georgia, serif',
                          lineHeight: '1',
                          opacity: '0.7'
                        }}
                      >
                        "
                      </span>
                    </div>

                    <blockquote
                      className="mb-4 text-muted fst-italic"
                      style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {currentData.text}
                    </blockquote>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="author-info">
                        <h5 className="fw-bold text-dark mb-1">{currentData.name}</h5>
                        <p className="text-warning fw-semibold small mb-0 text-uppercase tracking-wide" style={{ fontSize: '0.85rem' }}>
                          {currentData.role}
                        </p>
                      </div>
                      <div>{renderStars(currentData.rating)}</div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="text-center mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm rounded-circle me-2 ${index === currentTestimonial ? 'btn-warning' : 'btn-outline-secondary'}`}
                    style={{
                      width: '12px',
                      height: '12px',
                      padding: '0',
                      border: 'none'
                    }}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              
              <button
                className="btn btn-warning position-absolute top-50 start-0 translate-middle-y rounded-circle shadow-sm"
                style={{
                  width: '40px',
                  height: '40px',
                  marginLeft: '-20px',
                  border: 'none'
                }}
                onClick={() =>
                  setCurrentTestimonial(
                    currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
                  )
                }
              >
                ‹
              </button>

              <button
                className="btn btn-warning position-absolute top-50 end-0 translate-middle-y rounded-circle shadow-sm"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '-20px',
                  border: 'none'
                }}
                onClick={() =>
                  setCurrentTestimonial(
                    currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
                  )
                }
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tracking-wide {
          letter-spacing: 1px;
        }

        .testimonial-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95) !important;
        }

        .testimonial-content {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .btn:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
