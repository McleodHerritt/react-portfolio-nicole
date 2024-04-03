import React from "react";
import myImage from "../Portfolio/assets/newprofilepic.png";
import myImage2 from "../Portfolio/assets/imageforportfolio1.png";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="hero-container primary-color-bg">
        <div className="intro-card">
          <h2 className="name">NICOLE HERRITT</h2>
          <p className="par">&lt;Web Dev/&gt;</p>
        </div>
        <div>
          <img src={myImage} alt="Profile" className="profile-pic" />
        </div>
      </div>
      <div className="description">
        <div className="text-and-image">
          <img src={myImage2} alt="Image for portfolio" className="profile-image-1" />
          <p className="profile-description accent-dark-bg">
            Hello! I'm Nicole, a passionate web developer with a focus on front-end technologies. I love to create beautiful, responsive, and
            user-friendly websites. My journey in web development started in July 2023, and I have since developed a strong foundation in HTML, CSS,
            JavaScript, and React.
          </p>
        </div>

        <p className="profile-description accent-light-bg">
          When I'm not coding, you might find me spending time with my family, relaxing, or reading. Feel free to check out my portfolio and get in
          touch if you think we could be a good fit to work together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
