import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  
  return (
  
    <Card>
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">{product.description}</div>
        </Card.Text>
        <Card.Text as="div">
          <p>Ram</p>
        <div className="my-4">{product.parameter.ram}</div>
        
        </Card.Text>
        <Card.Text as="div">
          <p>Weight</p>
          <div className="my-4">{product.parameter.weight}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
