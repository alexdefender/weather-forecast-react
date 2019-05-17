import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/">Today</Link>
      </li>
      <li>
        <Link to="/next">Next days</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
