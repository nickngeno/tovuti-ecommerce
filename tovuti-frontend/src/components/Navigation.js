import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {BiCartAlt} from 'react-icons/bi'


const Navigation = () => {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">KimmyJerseys</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/product-ms">Product-MS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">SignUp</Nav.Link>
            <Nav.Link href="/cart"><BiCartAlt />Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
