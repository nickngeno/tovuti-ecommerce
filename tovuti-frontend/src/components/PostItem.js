import React from "react";
import { Card, Image } from "react-bootstrap";
import "./PostItem.css";
import man from "../Images/man.png";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const PostItem = () => {
  return (
    <>
      <div className="posts-div">
        <Card>
          <Image src={man} />
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className="row">
              <Link
                to="/productDetails"
                className="btn btn-outline-secondary btn-block"
              >
                <FiEdit /> Add to Cart
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Image src={man} />
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className="row">
              <Link
                to="/productDetails"
                className="btn btn-outline-secondary btn-block"
              >
                <FiEdit /> Add to Cart
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Image src={man} />
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className="row">
              <Link
                to="/productDetails"
                className="btn btn-outline-secondary btn-block"
              >
                <FiEdit /> Add to Cart
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Image src={man} />
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className="row">
              <Link
                to="/productDetails"
                className="btn btn-outline-secondary btn-block"
              >
                <FiEdit /> Add to Cart
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default PostItem;
