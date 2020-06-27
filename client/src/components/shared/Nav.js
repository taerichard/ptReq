import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <h3>Nav</h3>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/trainers">
          <li>Trainers</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
