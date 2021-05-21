import React from 'react';
import './style.css'
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar variant="dark" className="color-nav" expand="lg">
      <Navbar.Brand href="#home">Oliver Bewley</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;