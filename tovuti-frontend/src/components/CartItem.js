import React from "react";
import { Row, Col, Image, Card,Button } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
const CartItem = ({ cart }) => {
  const dispatch =useDispatch()
  return (
    <>
      {cart.map((item) => (
        <Card key={item.product_id} className=" mb-3">
          <Row className="no-gutters">
            <Col md={4} className="img-div">
              <Image src={item.imageUrl} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>
                  <Link to={`/productDetails/${item.product_id}`}>
                    {item.name}
                  </Link>
                </Card.Title>
                <Card.Subtitle>Price ${item.price}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>
                  Quantity: <strong>{item.qty}</strong>
                </Card.Text>
                <Button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item.product_id))} >
                  <AiOutlineDelete /> Delete
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

export default CartItem;
