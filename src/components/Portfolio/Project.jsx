import React from "react";
import { FaGithub } from "react-icons/fa";

const Project = ({ image, title, deployedLink, githubLink }) => {
  return (
    <div className="portfolio-item ">
      <img src={image} className="portfolio-image" alt={title} />
      <div className="portfolio-links">
        <a className="portfolio-link" href={deployedLink}>
          {title}
        </a>
        <a className="code-link" href={githubLink}>
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Project;
