import React, { useState, useEffect } from "react";
import { useParams ,useHistory} from "react-router";
import { Container, Row, Col, Image, Card, Form, Spinner } from "react-bootstrap";
import "./ProductScreen.css";
import {useSelector, useDispatch} from  'react-redux'
import {getProductDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

const ProductScreen = () => {
  const state = useSelector(state => state.product)
  const { loading , product,error } = state;

  const { id } = useParams();
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(()=>{
    if(product && id !== product._id){
      dispatch(getProductDetails(id))
    }
    
  },[dispatch,id,product])

  const handleAddtocart = () =>{
    dispatch(addToCart(id, qty))
    history.push("/cart")

  }

  return (
    <>
      <Container className="product-details">
        {loading ? (
          <div className="spinner-div"><Spinner animation="border" variant="secondary" /></div>
        ): error ? <h2>{error}</h2>: (
          <Row>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <div className="card-image">
                    <Image src={product.imageUrl} style={{ width: "400px" }} />
                  </div>
                  <Card.Title>
                    { product.name}
                  </Card.Title>
                  <Card.Text className="text-muted">Season: {product.year}</Card.Text>

                  <Card.Subtitle>Home/Away/Third : {product.type}</Card.Subtitle>
                  <hr />
                  <Card.Text className="text-muted">{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="price-details-card">
                <Card.Body>
                  <Card.Title>Price ${product.price}</Card.Title>
                  <hr />
                  <Form>
                    <Form.Group controlId="SelectCustom" className="mt-3 mb-3">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control as="select" value={qty} custom onChange={(e) => setQty(e.target.value)} >
                        {[...Array(5).keys()].map(x =>(
                          <option key={x+1} value={x+1}>{x+1}</option>)) }
                        
                      </Form.Control>
                    </Form.Group>
                  </Form>
                  <Card.Link
                    onClick={handleAddtocart}
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
