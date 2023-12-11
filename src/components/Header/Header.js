import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div>
      <h1 className="name">Nicole McLeod-Herritt</h1>
      <nav>
        <ul>
          <li>
            <a className="nav" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="nav" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="nav" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
