import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="position-relative">
              <img 
                src="/assets/banner3.jpg" 
                alt="Agriculture worker in greenhouse" 
                className="w-100 rounded-4 shadow-lg" 
                style={{ height: '600px', objectFit: 'cover' }}
              />
            </div>
          </Col>

          <Col lg={6} className="ps-lg-5 pt-4 pt-lg-0">
            <h1 className="fw-bold mb-4" style={{ fontSize: '3rem', lineHeight: '1.2' }}>
              Agriculture & Organic<br />
              Product Farm
            </h1>
            
            <p className="text-muted mb-5 pe-lg-4" style={{ lineHeight: '1.6' }}>
              There are many variations of passages of lorem available but the 
              majority have suffered alteration in some form by injected humor, 
              or randomised words which don't look even believable.
            </p>

            
            <div className="d-flex align-items-center mb-5">
              <div className="pe-4 me-4  border-end border-3 border-secondary">
                <h2 className="display-3 fw-bold text-success mb-0" style={{ fontWeight: '700' }}>
                  25M
                </h2>
              </div>
              <div>
                <div className="fw-semibold text-dark" style={{ fontSize: '16px' }}>
                  Growth Tonns<br />
                  of Harvest
                </div>
              </div>
            </div>

          
            <div className="position-relative" style={{ height: '280px' }}>
             
             <Card
                className= "  card-wrapper p-3 shadow"
                style={{
                  backgroundColor: '#ffd54f',
                  width: '220px',
                  borderRadius: '12px',
                }}
              >
                <Card.Body>
                  <div className="mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        border: '2px solid rgba(255,255,255,0.5)',
                      }}
                    >
                      <img src="/assets/banner4.png" alt="icon1" width='24' 
                      style={{ width: '60px', height: '60px' }} />
                    </div>
                  </div>
                  <h6 className="fw-bold text-dark mb-2">
                    100% Guaranteed <br /> Organic Product
                  </h6>
                  <p className="small text-dark mb-0" style={{ fontSize: '13px' }}>
                    Always parties but trying she <br /> shewing of moment.
                  </p>
                </Card.Body>
              </Card>

              
              <Card 
                className="position-absolute shadow-lg border-0 text-white" 
                style={{ 
                  backgroundColor: '#4caf50', 
                  width: '280px',
                  borderRadius: '12px',
                  top: '40px',
                  left: '160px',
                  zIndex: 20
                }}
              >
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        border: '2px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <img src="/assets/banner5.png" alt="icon2" width="24" 
                      style={{ width: '60px', height: '60px' }} 

                      />
                     

                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: '16px', lineHeight: '1.3' }}>
                    Top-Quality Healthy<br />
                    Foods Production
                  </h5>
                  <p className="small mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>
                    Majority have suffered alteration in<br />
                    some form by injected humor.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;