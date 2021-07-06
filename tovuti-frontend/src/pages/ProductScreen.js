import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Container, Row, Col, Image, Card, Form, Spinner } from "react-bootstrap";
import "./ProductScreen.css";

const ProductScreen = () => {
  const [item, setItem] = useState({});
  console.log(Object.keys(item).length);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  const { name, description, imageUrl, type, year } = item;
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:5000/jerseys/items/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <Container className="product-details">
        {loading && Object.keys(item).length === 0 ? (
          <div className="spinner-div"><Spinner animation="border" variant="secondary" /></div>
        ) : (
          <Row>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <div className="card-image">
                    <Image src={imageUrl} style={{ width: "400px" }} />
                  </div>
                  <Card.Title>
                    {" "}
                    {name[0].toUpperCase() + name.slice(1)}
                  </Card.Title>
                  <Card.Text className="text-muted">Season: {year}</Card.Text>

                  <Card.Subtitle>Home/Away/Third : {type}</Card.Subtitle>
                  <hr />
                  <Card.Text className="text-muted">{description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="price-details-card">
                <Card.Body>
                  <Card.Title>Price KSh 5,000</Card.Title>
                  <hr />
                  <Form>
                    <Form.Group controlId="SelectCustom" className="mt-3 mb-3">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                  <Card.Link
                    href="/cart"
                    className="btn btn-outline-primary btn-block"
                  >
                    Add to Cart
                  </Card.Link>
                  <Card.Link
                    href="/cart"
                    className="btn btn-outline-warning btn-block"
                  >
                    Buy Now
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductScreen;
