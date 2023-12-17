import React from "react";
import myImage from "../Portfolio/assets/profilePic.jpg";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src={myImage} alt="Profile" className="profile-pic" />
      <p className="profile-description">
        Hello! I'm Nicole, a passionate web developer with a focus on front-end
        technologies. I love to create beautiful, responsive, and user-friendly
        websites. My journey in web development started July 2023, and I have
        since developed a strong foundation in HTML, CSS, JavaScript, React.
      </p>
      <p className="profile-description">
        When I'm not coding, you might find me spending time with my family,
        relaxing or reading. Feel free to check out my portfolio and get in
        touch if you think we could be a good fit to work together!
      </p>
    </section>
  );
};

export default AboutMe;
