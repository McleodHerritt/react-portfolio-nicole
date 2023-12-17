import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div>
      <h1 className="resume-title">Resume</h1>
      <div>
        <h2 className="h2">Education</h2>
        <ul className="list-items">
          <li>
            Unervisity of New Brunswick - Full Stack Web Development Bootcamp
          </li>
          <li>NSCC - Human Services Counselling</li>
        </ul>
      </div>
      <div>
        <h2 className="h2">Experience</h2>
        <ul className="list-items">
          <li>AVRCE - Eductaional Assistant</li>
          <li>See GitHub for my current projects</li>
        </ul>
      </div>
      <div>
        <h2 className="h2">Skills</h2>
        <ul className="list-items">
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

export default Resume;
