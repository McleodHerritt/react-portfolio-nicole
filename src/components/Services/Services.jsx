import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h2>Webpage Development Prices</h2>
      <ul className="prices">
        <li>Basic Website: $500</li>
        <li>Custom Website: $1000</li>
      </ul>

      <h2 className="title">E-commerce Website Development Prices</h2>
      <ul className="prices">
        <li>Basic E-commerce Website: $2000</li>
        <li>Custom E-commerce Website: $3000</li>
        <li>Enterprise E-commerce Website: $5000</li>
      </ul>
    </div>
  );
};

export default Services;
