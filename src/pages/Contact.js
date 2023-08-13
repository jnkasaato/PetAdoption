import React, { useState } from 'react';
import curtainWhite from '../images/curtain-white.png';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      message,
    });
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    // Set the isSubmitted state to true
    setIsSubmitted(true);
  };

  return (
    <div className="contact" style={{position:"relative"}}>
      <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
          
      <div id="top"></div>
      <div className="contact-container">
        <h1>We want to get to know you</h1>
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <div className="sent-message">
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label className="contact-label">First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="contact-input"
              />
            </div>
            <div>
              <label className="contact-label">Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="contact-input"
              />
            </div>
            <div>
              <label className="contact-label">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="contact-input"
              />
            </div>
            <div>
              <label className="contact-label">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="contact-textarea"
              />
            </div>
            <button type="submit" className="contact-button">
              Submit
            </button>
            <h1>Adopting.Fostering.Volunteering.</h1>
            <p>
              Whether you're passionate about volunteering, eager to embark on the wonderful journey of adoption, or simply have questions that deserve caring answers, this is the place to connect. We're here to guide you, share our expertise, and make your experience with HappyTail Pet Haven as joyful and fulfilling as it can be. Reach out to us, and let's take the first step towards creating a brighter future for our furry friends together.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};

export default Contact;
