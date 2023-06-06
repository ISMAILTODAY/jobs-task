import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div className='position-fixed z-3 end-0 start-0  w-full'>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='fs-2'>Movie House</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movie Collection</Nav.Link>
            <Nav.Link href="#pricing">New Movie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    );
};

export default NavigationBar;