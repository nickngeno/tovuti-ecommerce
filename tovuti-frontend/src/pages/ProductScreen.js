import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import "./ProductScreen.css";

const ProductScreen = () => {
  const [item, setItem] = useState({});
  console.log(item);
  const { _id, name, description, imageUrl, type, year } = item;
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:5000/jerseys/items/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <Container className="product-details">
        {item.length === "" ? <p>Loading ....</p> : (<Row>
          <Col md={9}>
            <Card>
              <Card.Body>
                <div className="card-image">
                  <Image src={imageUrl} style={{ width: "400px" }} />
                </div>
                <Card.Title> {name}</Card.Title>
                <Card.Text className="text-muted">Season: {year}</Card.Text>
                
                <Card.Subtitle>Home/Away/Third : {type}</Card.Subtitle>
                <hr />
                <Card.Text className="text-muted">
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Price KSh 5,000</Card.Title>
              </Card.Body>
              <Card.Body>
                <Form>
                  <Form.Group controlId="SelectCustom">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control as="select" custom>
                      <option>1</option>
                      <option>2</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Body className="row">
                <Col>
                  <Button href="/cart" variant="outline-primary">
                    Add to Cart
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-warning">Buy Now</Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>)}
        
      </Container>
    </>
  );
};

export default ProductScreen;
