import React, { useState } from "react";
import { Row, Card, Image, Col } from "react-bootstrap";
import man from "../../Images/man.png";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { EditProductModal } from "../../Modals/EditProductModal";

const MyPostItems = () => {
  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };
  const handleEdit = () => {
    setShow(true);
  };
  const handleDelete = () => {
    const check = window.confirm("Are you sure you want to delete?");
    if (check) {
      console.log("deleted!");
    }
  };
  return (
    <>
      <Card className="mb-3 shadow">
        <Row className="no-gutters">
          <Col md={4}>
            <Image src={man} style={{ height: "180px" }} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Subtitle>Ksh 5,000</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link
                // href="/productDetails"
                onClick={() => handleEdit()}
                className="btn btn-outline-warning"
              >
                <FiEdit /> Edit
              </Card.Link>
              <Card.Link
                onClick={handleDelete}
                className="btn btn-outline-danger"
              >
                <AiOutlineDelete /> Delete
              </Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <EditProductModal show={show} onHide={onHide} />
    </>
  );
};

export default MyPostItems;
