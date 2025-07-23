import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section py-5">
      <Container>
        <Row>
          
          <Col md={3}>
            <h4 className="footer-logo">🌾 AGRICA</h4>
            <p>
              Happen active county. Winding morning ambition shyness evident to poor. Because elderly new to the point to main success.
            </p>
            <Form className="d-flex subscribe-box">
              <Form.Control type="email" placeholder="Your Email" />
              <Button variant="warning" className="subscribe-btn">Go</Button>
            </Form>
          </Col>

          
          <Col md={2}>
            <h5>Explore</h5>
            <ul className="list-unstyled footer-links">
              <li>About Us</li>
              <li>Meet Our Team</li>
              <li>News & Media</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>Volunteers</li>
            </ul>
          </Col>

          
          <Col md={4}>
            <h5>Recent Posts</h5>
            <div className="recent-post mb-3 d-flex">
              <img src="https://agrica-react.vercel.app/assets/img/blog/2.jpg" alt="post1" className="post-img" />
              <div className="ms-2">
                <small>26 AUG, 2025</small>
                <p>Minuter him own clothes but observe as country.</p>
              </div>
            </div>
            <div className="recent-post d-flex">
              <img src="https://agrica-react.vercel.app/assets/img/blog/1.jpg" alt="post2" className="post-img" />
              <div className="ms-2">
                <small>08 DEC, 2025</small>
                <p>Overcame breeding point concerns has terminate</p>
              </div>
            </div>
          </Col>

        
          <Col md={3}>
            <h5>Contact Info</h5>
            <p><FaMapMarkerAlt className="me-2" /> 5919 Trussville Crossings Pkwy, Birmingham</p>
            <p><FaEnvelope className="me-2" /> info@validthemes.com</p>
            <p><FaPhone className="me-2" /> +123 34598768</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center mt-3 small">
          © Copyright 2025. All Rights Reserved by <strong>validthemes</strong>
        </p>
        <div className="scroll-top"><FaArrowUp /></div>
      </Container>
    </div>
  );
};

export default Footer;
