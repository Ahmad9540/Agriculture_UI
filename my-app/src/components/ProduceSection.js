
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BannerSection.css';

const BannerSection = () => {
  return (
    <div className="banner-section">
      <Container fluid>
        <Row>
          <Col md={6} className="left-box d-flex flex-column justify-content-center p-5 text-white">
            <h1 className="water-text">
              <i>Healthy Life With Fresh Products</i>
            </h1>


            
          </Col>

          <Col md={6} className="right-box d-flex flex-column align-items-end justify-content-start p-5">
            <h2
              className="mask-text mb-4"
              style={{ backgroundImage: `url('/assets/img/banner/17.jpg')` }}
            >

            </h2>
            <div className="fruit-grid">
              <div className="fruit-icon"><img src="/assets/bluebarry.png" alt="Blueberry" /><p>Blueberry</p></div>
              <div className="fruit-icon"><img src="/assets/orange.png" alt="Orange" /><p>Orange</p></div>
              <div className="fruit-icon"><img src="/assets/cabbage.png" alt="Cabbage" /><p>Cabbage</p></div>
              <div className="fruit-icon"><img src="/assets/maize.png" alt="Maize" /><p>Maize</p></div>
              <div className="fruit-icon"><img src="/assets/apples.png" alt="Apples" /><p>Apples</p></div>
              <div className="fruit-icon"><img src="/assets/strawberry.png" alt="Strawberry" /><p>Strawberry</p></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSection;
