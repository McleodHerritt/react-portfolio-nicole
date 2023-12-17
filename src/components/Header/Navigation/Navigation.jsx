import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav" to="/">
            About Me
          </Link>
        </li>
        <li>
          <Link className="nav" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="nav" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="nav" to="/resume">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
