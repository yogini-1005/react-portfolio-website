import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please fill out all fields before submitting.",
        confirmButtonColor: "#ff9800",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your message has been sent successfully.",
        confirmButtonColor: "#4CAF50",
      }).then(() => setFormData({ name: "", email: "", message: "" }));
    }
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      <Footer />
    </section>
  );
};

export default Contact;
