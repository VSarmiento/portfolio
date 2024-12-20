import React, { useState } from 'react';
import '../styles/Contact.css';
import PageLayout from '../components/PageLayout';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createMailtoLink = () => {
    const subject = `Message from ${formData.name}`;
    const body = `${formData.message}`;
    return `mailto:vsarmiento@csu.fullerton.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageLayout>
      <div className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <a href={createMailtoLink()} className="send-button">
          Send
        </a>
      </form>
    </div>
    </PageLayout>
  );
}

export default Contact;
