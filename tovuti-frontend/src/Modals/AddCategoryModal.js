import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export const AddCategoryModal = ({ show, onHide, alertOption }) => {
  //   console.log(show)
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={alertOption}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="category name" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
