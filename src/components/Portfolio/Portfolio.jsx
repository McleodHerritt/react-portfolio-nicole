import React from "react"; // Importing React from the 'react' package
import clientPicture from "./assets/clientPicture.jpg"; // Importing an image asset for clientPicture
import weddingRsvpBackgroundImg from "./assets/weddingRsvpBackgroundImg.jpg"; // Importing an image asset for weddingRsvpBackgroundImg
import onlineBookclub from "./assets/onlineBookclub.jpg"; // Importing an image asset for onlineBookclub
import "./portfolio.css"; // Importing the stylesheet for the Portfolio component
import Project from "./Project"; // Importing the Project component

// Array of portfolio items, each item is an object with id, image, title, demoLink, and codeLink
const portfolioItems = [
  // Example items in the array
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

// Defining the Portfolio functional component
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

export default Portfolio; // Exporting the Portfolio component
