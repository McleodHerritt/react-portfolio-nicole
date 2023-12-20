import React from "react"; // Importing React from the 'react' package
import { FaGithub } from "react-icons/fa"; // Importing the GitHub icon from 'react-icons'

// Defining the Project functional component with destructured props
const Project = ({ image, title, deployedLink, githubLink }) => {
  if (deployedLink === "none") {
    return (
      <div className="portfolio-item">
        <img src={image} className="portfolio-image" alt={title} />
        <div className="portfolio-links">
          <h3 className="portfolio-link disabled">{title}</h3>
          <a className="code-link" href={githubLink}>
            <FaGithub />
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="portfolio-item">
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

export default Project; // Exporting the Project component
