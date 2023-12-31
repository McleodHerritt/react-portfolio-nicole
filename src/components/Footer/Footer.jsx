import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
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
          <FaGithub />
        </a>
        <a
          className="social-link"
          href="https://linkedin.com/in/nicoleherritt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="social-link"
          href="https://twitter.com/nicoleherr20075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
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
