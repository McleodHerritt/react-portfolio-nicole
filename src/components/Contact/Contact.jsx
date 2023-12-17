import React, { useState } from "react";
import "./contact.css"; // Import your contact specific styles here

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name);
  };

  // Form validation function
  // Function to validate individual field
  const validateField = (fieldName) => {
    let tempErrors = { ...errors };
    switch (fieldName) {
      case "name":
        tempErrors.name = formData.name ? "" : "Name is required.";
        break;
      case "email":
        tempErrors.email = formData.email
          ? /\S+@\S+\.\S+/.test(formData.email)
            ? ""
            : "Email is not valid."
          : "Email is required.";
        break;
      case "message":
        tempErrors.message = formData.message ? "" : "Message is required.";
        break;
      default:
        break;
    }
    setErrors(tempErrors);
  };
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateField()) {
      console.log("Form data submitted:", formData);
      // Process the form data here (e.g., send to an API)
      // Reset form or give user feedback
    }
  };

  // Handler for field blur event
  const handleBlur = (e) => {
    validateField(e.target.name);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label className="label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button className="button" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
