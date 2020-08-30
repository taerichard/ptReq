import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand to="/" as={Link}>
        Trainer
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link to="/trainers" as={Link}>
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
