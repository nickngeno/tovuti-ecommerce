import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export const AddProductModal = ({ show, onHide, alertOption }) => {
  //   console.log(show)
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={alertOption}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="price" />
            </Form.Group>
            <Form.Group controlId="sku">
              <Form.Label>SKU</Form.Label>
              <Form.Control as="select">
                <option>select s.k.u</option>
                <option>1</option>
                <option>2</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select">
                <option>select category</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>3</option>
                <option>3</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Close</Button>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
