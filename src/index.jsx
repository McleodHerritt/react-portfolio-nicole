import React from "react"; // Importing React from the 'react' package
import { createRoot } from "react-dom/client"; // Importing createRoot from 'react-dom/client' for rendering
import "./index.css"; // Importing the main stylesheet
import App from "./App"; // Importing the App component

// Getting the HTML element with id 'root' to mount our React application
const container = document.getElementById("root");
// Creating a root render container using the element retrieved above
// Note: If using TypeScript, use createRoot(container!) to assert that container is non-null
const root = createRoot(container);

// Rendering the App component inside the root container
// React.StrictMode is a wrapper to help identify potential problems in an application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
