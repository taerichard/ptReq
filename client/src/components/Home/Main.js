import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Main() {
  return (
    <div>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Link to="/register">Register Trainer</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/trainer">Get Trainer</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Main;
