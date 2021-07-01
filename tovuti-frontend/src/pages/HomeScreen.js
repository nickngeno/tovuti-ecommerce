import React, {useState, useEffect} from "react";
import Banner from "../components/Banner";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./HomeScreen.css";
import PostItem from "../components/PostItem";
import Footer from "../components/Footer";
import axios from 'axios'

const HomeScreen = () => {

  const [items, setItems] = useState([])
  console.log(items)

  useEffect (() =>{
   axios('http://localhost:5000/jerseys/list')
   .then(res => {
     setItems(res.data)

   }).catch(error =>{
     console.log(error)
   })

  },[])
  return (
    <>
      <Banner />
      <Container className="homescreen-content">
        <Row>
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Header>
                <strong>Featured Clubs</strong>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Liverpool</ListGroup.Item>
                <ListGroup.Item>Arsenal</ListGroup.Item>
                <ListGroup.Item>Manchester United</ListGroup.Item>
                <ListGroup.Item>Chelsea</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={9}>
            <PostItem items = {items} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;
