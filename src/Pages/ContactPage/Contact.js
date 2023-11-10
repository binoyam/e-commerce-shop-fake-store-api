import React, { useState } from "react";
import "./Contact.css";
import UserIcon from "../../Assets/Images/user-name-icon.svg";
import EmailIcon from "../../Assets/Images/email-icon.svg";
import MsgIcon from "../../Assets/Images/message-icon.svg";

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
        <h1 className="contact-page-header-text">Contact Us</h1>
      {isSubmitted ? (
        <div className="submit-message-container">
          <p className="submit-message">
            Thank you for contacting us! <br /> We will get back to you soon.
          </p>
        </div>
      ) : (
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <img src={UserIcon} alt="name" />
              <input
                type="text"
                id="name"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <img src={EmailIcon} alt="name" />

              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <img src={MsgIcon} alt="name" />

              <textarea
                id="message"
                placeholder="Write your message to us, thanks."
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
