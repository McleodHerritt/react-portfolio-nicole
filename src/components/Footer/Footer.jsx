import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          className="social-link"
          href="https://github.com/McleodHerritt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="social-link"
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="footer-text">
        <p>© {new Date().getFullYear()} Nicole McLeod-Herritt</p>
        <p> All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;