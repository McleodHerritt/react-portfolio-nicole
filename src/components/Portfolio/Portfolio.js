import React from "react";

const portfolioItems = [
  {
    id: 1,
    image: "./assets/clientpicture.jpg",
    demoLink: "https://mcleodherritt.github.io/horiseon-client/",
    codeLink: "https://github.com/McleodHerritt/horiseon-client.git",
  },

  {
    id: 1,
    image: "./assets/weddingrsvpbackgroundimae.jpg",
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
