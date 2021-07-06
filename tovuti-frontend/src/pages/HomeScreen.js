import React, {useEffect} from "react";
import Banner from "../components/Banner";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./HomeScreen.css";
import PostItem from "../components/PostItem";
import Footer from "../components/Footer";
import {Spinner} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {getAllProducts} from '../redux/actions/productActions'

const HomeScreen = () => {

  const state = useSelector(state => state.allProducts)
  const { loading,error, allProducts} = state
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])

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
            {loading ?  (<div className="spinner-div"><Spinner animation="border" variant="secondary" /></div>) :error ? <h2>{error}</h2> :
            <PostItem items = {allProducts} />}
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;
