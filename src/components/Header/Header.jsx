import React from "react";
import "./header.css";

import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <div>
      <h1 className="name">Nicole Herritt</h1>
      <Navigation />
    </div>
  );
};

export default Header;
