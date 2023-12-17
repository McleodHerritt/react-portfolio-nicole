import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  // because an assignment requirement is to use Link istead of NavLink, we have to use useLocation()
  // to get the current location and then use that to determine which link should have the active class
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav active" : "nav";
  };

  return (
    <nav>
      <ul>
        <li>
          <Link className={getLinkClass("/")} to="/">
            About Me
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/portfolio")} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/contact")} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/resume")} to="/resume">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
