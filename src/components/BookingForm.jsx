import React, { useState } from "react";
import "../styles/BookingForm.css";

export default function BookingForm({ selectedDates }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, selectedDates });
    alert("Reserva enviada correctamente ✅");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className="section-title">Reserva tu estadía</h2>
      <p className="section-subtitle">
        Completá tus datos y fechas seleccionadas
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
      {selectedDates && (
        <p className="muted">
          {Array.isArray(selectedDates)
            ? `Del ${selectedDates[0].toLocaleDateString()} al ${selectedDates[1].toLocaleDateString()}`
            : `Fecha seleccionada: ${selectedDates.toLocaleDateString()}`}
        </p>
      )}
      <button type="submit" className="btn-submit">
        Reservar
      </button>
    </form>
  );
}

