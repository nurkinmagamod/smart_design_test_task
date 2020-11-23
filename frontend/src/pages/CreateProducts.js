import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export const CreateProducts = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [parameter, setParameter] = useState();

  const sumbitHandler = (e) => {
    e.preventDefault();
    const saveProducts = async () => {
      await axios
        .create({
          baseURL: "http://localhost:5000/",
        })
        .post("/api/products", { description, name, parameter });
    };
    saveProducts();
    setName("");
    setDescription("");
  };

  return (
    <div>
      <Form onSubmit={sumbitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="parametrRam">
          <Form.Label>Ram</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Ram amount"
            onChange={(e) =>
              setParameter({ ...parameter, ram: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="parametrWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Weight"
            onChange={(e) =>
              setParameter({ ...parameter, weight: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Create
        </Button>
      </Form>
    </div>
  );
};
