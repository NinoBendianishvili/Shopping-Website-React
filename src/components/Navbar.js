import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/navbar.css';

const Navigation = () => {
  return (
    <Navbar className='navbar' expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">Mechanical Rainbow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
          <Nav>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/signup">Sign Up</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://www.facebook.com/" className="navbar-brand">Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Français</NavDropdown.Item>
              <NavDropdown.Item>Español</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
