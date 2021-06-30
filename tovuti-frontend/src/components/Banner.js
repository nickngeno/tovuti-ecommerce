import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./Banner.css";
import man from "../Images/man.png";
import girls from "../Images/girls.png";
import { FcSearch } from "react-icons/fc";
import { GoLocation } from "react-icons/go";

const Banner = () => {
  return (
    <Container fluid className="banner">
      <Container>
        <Row>
          <Col md={4} className="banner-image">
            <Image src={man}></Image>
          </Col>
          <Col sm={12}  md={4} className="banner-column">
            <span className="mb-3">
              Find any Jersey in{" "}
              <Button variant="secondary">
                {" "}
                <GoLocation /> Kenya
              </Button>{" "}
            </span>
            <Form>
              <InputGroup className="mb-2">
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Type your search here"
                />
                <InputGroup.Text>
                  <FcSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Col>
          <Col md={4} className="banner-image">
            <Image src={girls}></Image>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;
