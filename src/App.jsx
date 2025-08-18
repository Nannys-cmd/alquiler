import React from "react";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";
import Events from "./components/Events";
import ContactForm from "./components/ContactForm";
import Calendar from "./components/Calendar";

import "./styles/styles.css";
import "./styles/Calendar.css";

export default function App() {
  const eventos = [
    { date: "2025-08-10", title: "Feria de libros" },
    { date: "2025-08-15", title: "Evento Legal" },
    { date: "2025-09-01", title: "Exposición Diseño" },
  ];

  return (
    <>
      <div className="app">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="container">
          {/* Propiedades */}
          <section id="properties">
            <h2>Propiedades</h2>
            <PropertyList />
          </section>

          {/* Calendario y Eventos */}
          <section id="calendar-events">
            <div className="calendar-events-container">
              <div className="calendar-wrapper">
                <h2>Disponibilidad</h2>
                <Calendar events={eventos} />
              </div>
              <div className="events-wrapper">
                <h2>Eventos Próximos</h2>
                <Events />
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section id="contact">
            <h2>Contacto</h2>
            <ContactForm />
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Estudio Arca - Sitio de propiedades</p>
        </footer>
      </div>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/54116688016"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          fontSize: "24px",
          zIndex: 1000,
          textDecoration: "none",
        }}
      >
        📱
      </a>
    </>
  );
}
