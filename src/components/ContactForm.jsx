import React, { useState } from "react";
import "../styles/BookingForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", formData);
    alert("Mensaje enviado correctamente ✅");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="section-title">Contáctanos</h2>
      <p className="section-subtitle">
        Envíanos tu consulta y te responderemos pronto
      </p>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="btn-submit">
        Enviar
      </button>
    </form>
  );
}
