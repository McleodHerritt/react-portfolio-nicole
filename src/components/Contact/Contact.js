import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>This is how you contact me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />

        <label htmlFor="github">GitHub:</label>
        <input type="text" id="github" name="github" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
