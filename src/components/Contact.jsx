import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container animate-fade">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form animate-slide-up">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" required placeholder="John Doe"/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" required placeholder="john@example.com"/>

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" required placeholder="+1234567890"/>

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required placeholder="Your message..."></textarea>

          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
