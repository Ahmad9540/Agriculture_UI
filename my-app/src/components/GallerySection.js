
import React from 'react';
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySection.css';

const GallerySection = () => {
  const projects = [
    {
      category: 'FRUIT',
      title: 'Healthy Food',
      image: '/assets/banner15.jpg',
    },
    {
      category: 'ORGANIC',
      title: 'Cow Milk',
      image: '/assets/banner16.jpg',
    },
    {
      category: 'VEGETABLES',
      title: 'Organic Vegetables',
      image: '/assets/banner17.jpg',
    },
    {
      category: 'HARVEST',
      title: 'CRISPY CUCUMBER',
      image: '/assets/banner22.jpg',
    },
  ];

  return (
    <section className="gallery-section text-center py-5">
      <p className="gallery-subtitle text-success fw-bold mb-1">Awesome Gallery</p>
      <h2 className="gallery-heading fw-bold mb-4">Explore Projects</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="px-4"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card className="project-card text-white">
              <Card.Img src={project.image} alt={project.title} />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3 overlay-bg">
                <small className="text-warning fw-bold">{project.category}</small>
                <Card.Title className="fs-5">{project.title}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GallerySection;    