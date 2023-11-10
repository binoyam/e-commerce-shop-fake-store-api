import React, { useState } from "react";
import "./Contact.css";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <h1 className="contact-page-header-text">Contact Us</h1>
      </div>
      {isSubmitted ? (
        <div className="submit-message-container">
          <p className="submit-message">
            Thank you for contacting us! We will get back to you soon.
          </p>
        </div>
      ) : (
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
