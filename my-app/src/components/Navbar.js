import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Badge,
  Row,
  Col
} from 'react-bootstrap';

import {
  FaRegClock,
  FaPhoneAlt,
  FaShoppingCart,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

import logo from '../assets/logo.png';

const MyNavbar = () => {
  return (
    <>
    
      <div className="text-white py-2 shadow-sm" style={{ backgroundColor: '#1f4e3d' }}>
        <Container>
          <Row className="justify-between align-items-center">
            <Col lg={8}>
              <small className="pt-3 d-flex flex-wrap gap-4 align-items-center text-white me-auto d-lg-block ms-3 d-none fs-6">
                <FaRegClock style={{ color: 'orange' }} size={24} />
                Opening Hours : Sunday - Friday, 08:00 am - 05:00 pm
                &nbsp;&nbsp;
                <a href="tel:+4733378901" className="text-white text-decoration-none ms-3">
                  <FaPhoneAlt style={{ color: 'orange' }} size={24} /> +4733378901
                </a>
              </small>
            </Col>
            <Col lg={4} className="text-end">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-white mx-2">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-white mx-2">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white mx-2">
                <FaLinkedin />
              </a>
            </Col>
          </Row>
        </Container>
      </div>

  
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo" width="190" height="60" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto fw-bold d-flex align-items-center gap-4 ">
              <NavDropdown title="Home" id="nav-home">
                <NavDropdown.Item href="#">Home Agriculture</NavDropdown.Item>
                <NavDropdown.Item href="#">Home Farming</NavDropdown.Item>
                <NavDropdown.Item href="#">Agriculture Shop</NavDropdown.Item>
                <NavDropdown.Item href="#">Dairy Farm</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Pages" id="nav-pages">
                <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#">Team</NavDropdown.Item>
                <NavDropdown.Item href="#">Team Details</NavDropdown.Item>
                <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#">Register</NavDropdown.Item>
                <NavDropdown.Item href="#">Login</NavDropdown.Item>
                <NavDropdown.Item href="#">Error Page</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Projects" id="nav-projects">
                <NavDropdown.Item href="#">Project</NavDropdown.Item>
                <NavDropdown.Item href="#">Project Details</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="nav-services">
                <NavDropdown.Item href="#">Services Version One</NavDropdown.Item>
                <NavDropdown.Item href="#">Services Version Two</NavDropdown.Item>
                <NavDropdown.Item href="#">Services Details</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Blog" id="nav-blog">
                <NavDropdown.Item href="#">Blog Standard</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog With Sidebar</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog Grid Two Column</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog Grid Three Column</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog Single</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog Single With Sidebar</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Shop" id="nav-shop">
                <NavDropdown.Item href="#">Shop Product</NavDropdown.Item>
                <NavDropdown.Item href="#">Shop Single</NavDropdown.Item>
                <NavDropdown.Item href="#">Shop Single Version Two</NavDropdown.Item>
                <NavDropdown.Item href="#">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#">Checkout</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#">
                <FaShoppingCart size={20} />
                <Badge bg="warning">0</Badge>
              </Nav.Link>
              <Button variant="outline-warning" className="ms-2">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <div style={{ paddingTop: '120px' }}></div>
    </>
  );
};

export default MyNavbar;
