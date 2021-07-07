import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {BiCartAlt} from 'react-icons/bi'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const state = useSelector((state) => state.cart);
  const { cartProducts } = state;
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
            <Link className="nav-link" to="/cart"><BiCartAlt />Cart {cartProducts.length !==0 ? ("("+cartProducts.map(item => Number(item.qty)).reduce((a, b) => a + b ,0)+")") :"" }</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
