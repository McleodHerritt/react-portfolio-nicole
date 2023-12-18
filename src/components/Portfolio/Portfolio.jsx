import React from "react";
import clientPicture from "./assets/clientPicture.jpg";
import weddingRsvpBackgroundImg from "./assets/weddingRsvpBackgroundImg.jpg";
import onlineBookclub from "./assets/onlineBookclub.jpg";
import "./portfolio.css";
import Project from "./Project";

const portfolioItems = [
  {
    id: 1,
    image: clientPicture,
    title: "Horiseon Client",
    demoLink: "https://mcleodherritt.github.io/horiseon-client/",

    codeLink: "https://github.com/McleodHerritt/horiseon-client.git",
  },

  {
    id: 2,
    image: weddingRsvpBackgroundImg,
    title: "Wedding RSVP",
    demoLink: "https://mcleodherritt.github.io/Wedding-RSVP/",

    codeLink: "https://github.com/McleodHerritt/Wedding-RSVP.git",
  },
  {
    id: 3,
    image: onlineBookclub,
    title: "Book Mark",
    demoLink: "https://mcleodherritt.github.io/horiseon-client/",

    codeLink: "",
  },
  {
    id: 4,
    image: onlineBookclub,
    title: "Placeholder",
    demoLink: "https://mcleodherritt.github.io/horiseon-client/",

    codeLink: "",
  },
  {
    id: 5,
    image: onlineBookclub,
    title: "Placeholder",
    demoLink: "https://mcleodherritt.github.io/horiseon-client/",

    codeLink: "",
  },
  {
    id: 6,
    image: onlineBookclub,
    title: "Placeholder",
    demoLink: "https://mcleodherritt.github.io/horiseon-client/",

    codeLink: "",
  },
];
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-items">
        {portfolioItems.map((item) => (
          <Project
            image={item.image}
            title={item.title}
            deployedLink={item.demoLink}
            githubLink={item.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
