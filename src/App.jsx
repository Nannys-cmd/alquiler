import React, { useState } from "react";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";
import CalendarComponent from "./components/Calendar";
import BookingForm from "./components/BookingForm";
import ContactForm from "./components/ContactForm";
import Events from "./components/Events";
import { properties } from "./data/properties";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  const [selectedDates, setSelectedDates] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const events = [
    { date: "2025-08-25", title: "Fiesta local en la plaza" },
    { date: "2025-08-30", title: "Mercado artesanal" },
  ];

  const handleReserve = (property) => {
    setSelectedProperty(property);
    setSelectedDates([null, null]); // abrir BookingForm sin fechas todavía
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div className="app">
      <Header />

      <section className="properties-section">
        <h2 className="section-title">Propiedades destacadas</h2>
        <PropertyList properties={properties} onReserve={handleReserve} />
      </section>

      <section className="calendar-events-section">
        <div className="calendar-wrapper">
          <h2 className="section-title">Seleccioná tus fechas</h2>
          <p className="section-subtitle">Consulta disponibilidad y eventos locales</p>
          <CalendarComponent events={events} onDateChange={handleDateChange} />
        </div>
        <div className="events-wrapper">
          <h2 className="section-title">Próximos eventos</h2>
          <Events events={events} />
        </div>
      </section>

      {selectedProperty && (
        <section className="booking-section">
          <BookingForm property={selectedProperty} selectedDates={selectedDates} />
        </section>
      )}

      <section className="contact-section">
        <h2 className="section-title">Contacto</h2>
        <ContactForm />
      </section>

      <a
        href="https://wa.me/2616988016"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <footer className="footer">
        <p>© 2025 GoodPlace. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

