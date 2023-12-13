import React from "react";
import clientPicture from "./assets/clientPicture.jpg";
import weddingRsvpBackgroundImg from "./assets/weddingRsvpBackgroundImg.jpg";
import "./portfolio.css";
const portfolioItems = [
  {
    id: 1,
    image: clientPicture,
    demoLink: "https://mcleodherritt.github.io/horiseon-client/",

    codeLink: "https://github.com/McleodHerritt/horiseon-client.git",
  },

  {
    id: 2,
    image: weddingRsvpBackgroundImg,
    demoLink: "https://mcleodherritt.github.io/Wedding-RSVP/",

    codeLink: "https://github.com/McleodHerritt/Wedding-RSVP.git",
  },
];
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-items">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image"
            />
            <h3>{item.title}</h3>
            <a
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Live Demo
            </a>
            <a
              href={item.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Code Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
