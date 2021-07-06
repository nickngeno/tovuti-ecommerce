import React from "react";
import { Row, Col, Image, Card, Form } from "react-bootstrap";
import man from "../Images/man.png";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <>
      <Card className=" mb-3">
        <Row className="no-gutters">
          <Col md={4} className="img-div">
            <Image src={man} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                <Link to={`/productDetails/${1111}`}>Dark Card Title</Link>
              </Card.Title>
              <Card.Subtitle>Ksh 5,000</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Form className="row">
                <Form.Group controlId="SelectCustom">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>
              </Form>
              <Card.Link className="btn btn-outline-danger">
                <AiOutlineDelete /> Delete
              </Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CartItem;
