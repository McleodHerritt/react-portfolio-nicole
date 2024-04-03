import React, { useState } from "react";
import "./contact.css"; // Import your contact specific styles here
import myImage from "../Portfolio/assets/contact-us-illustration-free-vector.png"; // Import your image here
import emailjs from "emailjs-com";

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
  const isFormValid = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
      isValid = false;
    }

    if (!formData.message) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const serviceID = "service_v2vo0kb";
      const templateID = "template_yf2wktc";
      const userID = "f3S8_C8RacQZvwh3i";

      emailjs.sendForm(serviceID, templateID, e.target, userID).then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          // Reset form or further actions
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
    }
  };

  // Handler for field blur event
  const handleBlur = (e) => {
    validateField(e.target.name);
  };

  return (
    <section className="contact">
      <div className="flexbox-row flexbox-space-between">
        <div className="contact-container">
          <h2 className="contact-me">Contact Me</h2>
          <form className="contact-form card " onSubmit={handleSubmit}>
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && <p className="error">{errors.name}</p>}

            <label className="label" htmlFor="email">
              Email:
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
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
        </div>
        <img src={myImage} alt="Contact us" className="contact-image" />
      </div>
    </section>
  );
};

export default Contact;
