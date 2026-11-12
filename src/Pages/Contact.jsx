import React, { useState } from "react";
import "../Styles/Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    if (!name || !email || !message) {
      alert("Please fill all inputs");
      return;
    };
    alert("Thanks for reaching out! We will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Customer Support</h2>
        <p>Email:a_store@gmail.com</p>
        <p>Phone:+961-71-950-597</p>
        <p>Address:Beirut-Lebanon(Al Hamra)</p>
      </div>

      <div className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            placeholder="Tell us how we can help"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button onClick={send} className="submit-btn">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
