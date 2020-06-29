import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap/Container";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <Nav className="row justify-content-end">
      <Nav.Item className="col-md-2">
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item className="col-md-2">
        <Link to="/trainers">Trainers</Link>
      </Nav.Item>
      <Nav.Item className="col-md-2">
        <Link to="/contact">Contact</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
