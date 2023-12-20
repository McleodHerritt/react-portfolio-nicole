import React from "react"; // Importing React from the 'react' package
import "./resume.css"; // Importing the stylesheet for the Resume component

// Defining the Resume functional component
const Resume = () => {
  return (
    // Returning JSX for the component
    <div>
      <h2>Resume</h2> {/* Header with class 'resume-title' */}
      <a className="resume" href="/ResumeDec2023.pdf">
        Click here to download my resume {/* Link to download the resume PDF */}
      </a>
      <div>
        <h2>Education</h2> {/* Education section header */}
        <ul className="list-items">
          {/* List of educational qualifications */}
          <li>
            University of New Brunswick - Full Stack Web Development Bootcamp
          </li>
          <li>NSCC - Human Services Counselling</li>
        </ul>
      </div>
      <div>
        <h2>Experience</h2> {/* Experience section header */}
        <ul className="list-items">
          {/* List of work experiences */}
          <li>AVRCE - Eductaional Assistant</li>
          <li>See GitHub for my current projects</li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2> {/* Skills section header */}
        <ul className="list-items">
          {/* List of technical and professional skills */}
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume; // Exporting the Resume component
