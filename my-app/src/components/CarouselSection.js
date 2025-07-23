import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './CarouselSection.css'; 

const CarouselSection = () => {
  return (
    <Carousel fade>
 
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/assets/banner.jpg"
          alt="First Slide"
          style={{ height: '90vh', objectFit: 'cover' }}
        />
        <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center text-center h-100">
          <h1 className="text-white">Agriculture Farming Products</h1>
          <p className="text-white">Dissuade ecstatic and properly saw entirely sir why laughter endeavor.</p>
          <Button variant="warning">Discover More</Button>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/assets/banner2.jpg"
          alt="Second Slide"
          style={{ height: '90vh', objectFit: 'cover' }}
        />

       
        <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center text-center h-100">
          <h1 className="text-white">Homemade Organic Product</h1>
          <p className="text-white">We deliver fresh organic products directly to you.</p>
          <Button variant="warning">Discover More</Button>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
};

export default CarouselSection;
