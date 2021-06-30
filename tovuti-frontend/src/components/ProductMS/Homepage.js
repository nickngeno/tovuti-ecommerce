import React, { useState } from "react";
import { Container, Row, Col, Tab, Button, ListGroup } from "react-bootstrap";
import { AddProductModal } from "../Modals/AddProductModal";
import MyPostItems from "./MyPostItems";
import Search from "../Search";
import "./Homepage.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { VscGroupByRefType } from "react-icons/vsc";
import Categoriespage from "./Categoriespage";

const Homepage = () => {
  const [show, setShow] = useState(false);

  const onHide = () => {
    setShow(false);
  };

  return (
    <>
      <Container className="homescreen-content">
        <h2>Product Management Module</h2>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={3}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  <AiOutlineFileAdd />
                  Products
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  <VscGroupByRefType />
                  Categories
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <Row>
                    <Col md={3}>
                      <Button
                        className="btn btn-primary mb-2"
                        onClick={() => setShow(true)}
                      >
                        <AiOutlineFileAdd /> Add Product
                      </Button>
                    </Col>
                    <Col md={9}>
                      <Search />
                    </Col>
                  </Row>
                  <MyPostItems />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <Categoriespage />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <AddProductModal show={show} onHide={onHide} />
    </>
  );
};

export default Homepage;
