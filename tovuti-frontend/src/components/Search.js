import React from "react";
import { Col, Form, FormControl, Button } from "react-bootstrap";
import "./Search.css";
const Search = () => {
  return (
    <>
        <Col md={12} className="search-box">
          <Form className="d-flex ">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
    </>
  );
};

export default Search;
