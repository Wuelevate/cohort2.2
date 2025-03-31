import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! I will contact you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
