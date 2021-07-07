import React,{useEffect,useState} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const state = useSelector((state) => state.cart);
  const { cartProducts } = state;
  const [myTotal ,setMyTotal] = useState(0)
  // console.log(cartProducts);

  useEffect(()=>{
    const totalCost = () =>{
      const total = cartProducts.map(item => item.qty * item.price).reduce((a, b) => a + b ,0)
      setMyTotal(total)
    }
    totalCost()
  },[cartProducts])
  
  return (
    <>
      <Container className="container-div">
        <Row>
          <h3>My Cart:</h3>
          <Col md={8} className="left-div">
            {cartProducts.length === 0 ? (
              <p>Your cart is empty. Please go to <Link to="/">home</Link> to start shopping</p>
            ) : (
              <CartItem cart={cartProducts} />
            )}
          </Col>

          <Col md={4}>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Card.Title>Price Details</Card.Title>
                <Card.Subtitle>SubItems ({cartProducts.map(item => Number(item.qty)).reduce((a, b) => a + b ,0)})</Card.Subtitle>
              </Card.Header>
              <Card.Body className="price-div">
                <p>Total Amount</p>
                <span>${myTotal}</span>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between">
                <Link to="/" className="btn btn-primary">
                  Continue Shopping
                </Link>
                <Link to="/cart" className="btn btn-warning">Place Order</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
