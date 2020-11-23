import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import SearchBox from "./SearchBox";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Product Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox handleQuery={props.onChange} />
            <Nav className="ml-auto">
              <Nav.Link href="/create">Create Product</Nav.Link>
              <Nav.Link href="/">Products Table</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
