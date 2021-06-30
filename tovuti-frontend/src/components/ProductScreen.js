import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import man from "../Images/man.png";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <>
      <Container className="product-details">
        <Row>
          <Col md={9}>
            <Card>
              <Card.Body>
                <div className="card-image">
                  <Image src={man} style={{ width: "400px" }} />
                </div>
                <Card.Title> Arsenal Fc</Card.Title>
                <Card.Text className="text-muted">
                  {" "}
                  Arsenal Home Shirt
                </Card.Text>
                <hr />
                <Card.Subtitle>Description</Card.Subtitle>
                <Card.Text className="text-muted">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam sapiente officiis veritatis ducimus ab accusantium
                  nulla doloremque minima optio. Quod porro quas vel fugit
                  distinctio fuga blanditiis recusandae deserunt accusantium!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Price KSh 5,000</Card.Title>
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
                <Card.Text className="row">
                  <Col>
                    <Button href="/cart" variant="outline-primary">Add to Cart</Button>
                  </Col>
                  <Col>
                    <Button variant="outline-warning">Buy Now</Button>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;
