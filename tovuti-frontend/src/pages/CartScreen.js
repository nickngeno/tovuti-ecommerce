import React from "react";
import { Container, Row, Col,Card} from "react-bootstrap";
import "./CartScreen.css";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  return (
    <>
      <Container className="container-div">
        <Row>
          <h3>My Cart:</h3>
          <Col md={8} className="left-div">
            <CartItem />
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Card.Title>Price Details</Card.Title>
                <Card.Subtitle>SubItems (0)</Card.Subtitle>
              </Card.Header>
              <Card.Body className="price-div">
                <p>Total Amount</p>
                <span>$123</span>
              </Card.Body>
              <Card.Body>
                <Card.Link href='/' className="btn btn-primary">
                  Continue Shopping
                </Card.Link>
                <Card.Link className="btn btn-warning">Place Order</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
