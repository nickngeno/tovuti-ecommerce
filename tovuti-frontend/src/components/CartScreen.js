import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
} from "react-bootstrap";
import "./CartScreen.css";
import { AiOutlineDelete } from "react-icons/ai";
import man from "../Images/man.png";

const CartScreen = () => {
  return (
    <>
      <Container className="container-div">
        <Row>
          <h3>My Cart:</h3>
          <Col md={8} className="left-div">
            <Card className=" mb-3">
              <Row className="no-gutters">
                <Col md={4} className="img-div">
                  <Image src={man}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Subtitle>Ksh 5,000</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Text>
                  <Form classname="row">
                    <Form.Group controlId="SelectCustom">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Card.Text>
                    <Card.Link className="btn btn-outline-danger">
                      <AiOutlineDelete /> Delete
                    </Card.Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card >
              <Row className="no-gutters">
                <Col md={4} className="img-div" >
                  <Image src={man}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Subtitle>Ksh 5,000</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Text>
                  <Form classname="row">
                    <Form.Group controlId="SelectCustom">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Card.Text>
                    <Card.Link className="btn btn-outline-danger">
                      <AiOutlineDelete /> Delete
                    </Card.Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>
                <Card.Title>Price Details</Card.Title>
              </Card.Header>
              <Card.Body className="price-div">
                <p>Price</p>
                <span>$123</span>
              </Card.Body>
              <Card.Body className="price-div total">
                <p>Total Amount</p>
                <span>$123</span>
              </Card.Body>
              <Card.Body>
                <Card.Link className="btn btn-primary">Continue Shopping</Card.Link>
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
