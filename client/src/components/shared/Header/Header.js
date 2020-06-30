import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap/Container";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <Nav className="row justify-content-center">
      <Nav.Item className="col-4">
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item className="col-4">
        <Link to="/trainers">Trainers</Link>
      </Nav.Item>
      <Nav.Item className="col-4">
        <Link to="/contact">Contact</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
