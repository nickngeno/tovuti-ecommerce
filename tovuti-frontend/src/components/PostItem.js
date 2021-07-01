import React from "react";
import { Card, Image } from "react-bootstrap";
import "./PostItem.css";
// import man from "../Images/man.png";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const PostItem = ({ items }) => {
  return (
    <>
      <div className="posts-div">
        {items.map((item,key) => (
          <Card key={item._id}>
            <Image src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Text className="row">
                <Link
                  to={`/productDetails/${item._id}`}
                  className="btn btn-outline-secondary btn-block  stretched-link"
                >
                  <FiEdit /> Add to Cart
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PostItem;
