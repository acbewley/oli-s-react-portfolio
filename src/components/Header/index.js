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
          <Nav.Link href="/oli-s-react-portfolio/#/">Home</Nav.Link>
          <Nav.Link href="/oli-s-react-portfolio/#/projects">Portfolio</Nav.Link>
          <Nav.Link href="/oli-s-react-portfolio/#/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;