import React from "react"; // Importing React from the 'react' package
import "./resume.css"; // Importing the stylesheet for the Resume component
import myImage from "./assets/Industries We Cater to with Mern TechStack-_0.svg"; // Importing the image for the Resume component
import myImage1 from "./assets/unb-1-logo-png-transparent.png";
// Defining the Resume functional component
const Resume = () => {
  return (
    // Returning JSX for the component
    <div>
      <h2 className="resume-title">Resume</h2> {/* Header with class 'resume-title' */}
      <div className="resume-wrapper">
        <div className="double-card ">
          <div className=" resume-card education">
            <h2 className="section-title">Education</h2> {/* Education section header */}
            <ul className="list-items ">
              {/* List of educational qualifications */}
              <li>University of New Brunswick - Full Stack Web Development Bootcamp</li>
              <li>NSCC - Human Services Counselling</li>
            </ul>
          </div>
          <img src={myImage1} alt="Resume" className="unb-pic" />
          <div className=" resume-card experience ">
            <h2 className="section-title">Experience</h2> {/* Experience section header */}
            <ul className="list-items">
              {/* List of work experiences */}
              <li>AVRCE - Eductaional Assistant</li>
              <li>See GitHub for my current projects</li>
            </ul>
          </div>
        </div>
        <div className="resume-card skills">
          <h2 className="section-title">Skills</h2> {/* Skills section header */}
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
          <img src={myImage} alt="Resume" className="mern-pic" />
        </div>
      </div>
      <a className="resume" href="/ResumeDec2023.pdf" button="resume">
        Click here to download my resume {/* Link to download the resume PDF */}
      </a>
    </div>
  );
};

export default Resume; // Exporting the Resume component
