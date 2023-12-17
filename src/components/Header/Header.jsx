import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1 className="name">Nicole McLeod-Herritt</h1>
      <nav>
        <ul>
          <li>
            <NavLink className="nav" to="/">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/resume">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
