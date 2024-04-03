import React from "react"; // Importing React from the 'react' package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing components from 'react-router-dom' for routing
import Header from "./components/Header/Header"; // Importing the Header component
import Footer from "./components/Footer/Footer"; // Importing the Footer component
import AboutMe from "./components/AboutMe/AboutMe"; // Importing the AboutMe component
import Portfolio from "./components/Portfolio/Portfolio"; // Importing the Portfolio component
import Contact from "./components/Contact/Contact"; // Importing the Contact component
import Resume from "./components/Resume/Resume"; // Importing the Resume component
import Services from "./components/Services/Services";
import "./App.css"; // Importing the main stylesheet for the App

// Defining the App component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} /> {/* Route for the About Me */}
            <Route path="/portfolio" element={<Portfolio />} /> {/* Route for the Portfolio page */}
            <Route path="/contact" element={<Contact />} /> {/* Route for the Contact page */}
            <Route path="/resume" element={<Resume />} /> {/* Route for the Resume page */}
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        {/* Inserting the Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App; // Exporting the App component
