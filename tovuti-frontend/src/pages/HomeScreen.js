import React, {useState, useEffect} from "react";
import Banner from "../components/Banner";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./HomeScreen.css";
import PostItem from "../components/PostItem";
import Footer from "../components/Footer";
import axios from 'axios'
import {Spinner} from 'react-bootstrap'

const HomeScreen = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(items)

  useEffect (() =>{
    setLoading(true)
   axios('http://localhost:5000/jerseys/list')
   .then(res => {
     setItems(res.data)
      setLoading(false)
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
            <Card >
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
            {loading &&  (<div className="spinner-div"><Spinner animation="border" variant="secondary" /></div>)}
            <PostItem items = {items} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;
