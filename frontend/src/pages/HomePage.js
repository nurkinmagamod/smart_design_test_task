import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";

import Product from "../components/Product";

const HomePage = (props) => {
  const [products, setProducts] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios
        .create({
          baseURL: "http://localhost:5000/",
        })
        .get(`/api/products/`, {
          params: { search: `${props.query}` },
        });
      setProducts(data);
      setloading(false);
    };
    fetchProducts();
  }, [props.query]);

  let itemsToRender;
  if (products) {
    itemsToRender = products.map((item) => {
      return (
        <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
          {" "}
          <Product product={item} parametres={item.parameter} />
        </Col>
      );
    });
  }

  return (
    <div>
      <h1>Our products</h1>
      <Row>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          itemsToRender
        )}
      </Row>
    </div>
  );
};

export default HomePage;
