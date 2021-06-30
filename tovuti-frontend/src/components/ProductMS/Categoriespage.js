import React, { useState } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import "./Categoriespage.css";
import { AddCategoryModal } from "../Modals/AddCategoryModal";
import { EditCategoryModal } from "../Modals/EditCategoryModal";
import { VscGroupByRefType } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const Categoriespage = () => {
  const [show, setShow] = useState(false);

  const onHide = () => {
    setShow(false);
  };

  const handleDelete = () => {
    const check = window.confirm("Are you sure you want to delete?");
    if (check) {
      console.log("deleted!");
    }
  };

  return (
    <>
      <Button variant="primary" className="mb-2" onClick={() => setShow(true)}>
        <VscGroupByRefType /> Add Category
      </Button>
      <Row>
        <Col>
          <Table bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Category</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Mark</td>
                <td style={{ textAlign: "center" }}>
                  <Button className="mr-2" onClick={() => setShow(true)}>
                    <FiEdit />
                    Edit{" "}
                  </Button>{" "}
                  <Button variant="warning" onClick={handleDelete}>
                    {" "}
                    <AiOutlineDelete /> Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Jacob</td>
                <td style={{ textAlign: "center" }}>
                  <Button className="mr-2" onClick={() => setShow(true)}>
                    <FiEdit />
                    Edit{" "}
                  </Button>{" "}
                  <Button variant="warning" onClick={handleDelete}>
                    {" "}
                    <AiOutlineDelete /> Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <AddCategoryModal show={show} onHide={onHide} />
      <EditCategoryModal show={show} onHide={onHide} />
    </>
  );
};

export default Categoriespage;
