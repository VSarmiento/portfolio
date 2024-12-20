// portfolio-website/src/pages/Contact.js

import React from 'react';
import '../styles/Contact.css';
import PageLayout from '../components/PageLayout';

function Contact() {
  return (
    <PageLayout>
      <div className="contact">
        <h2>Contact Me</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
     </div>
    </PageLayout>
  );
}

export default Contact;
