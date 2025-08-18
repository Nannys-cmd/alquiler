import React from "react";
import "../styles/Events.css";

const sampleEvents = [
  { id: 1, title: "Feria de Diseño - Bs. As.", date: "2025-09-10" },
  { id: 2, title: "Maratón Ciudad", date: "2025-10-03" },
];

export default function Events() {
  return (
    <div className="events-grid">
      {sampleEvents.map((e) => (
        <div key={e.id} className="event-card">
          <h4>{e.title}</h4>
          <p className="muted">{e.date}</p>
        </div>
      ))}
      <p className="muted" style={{ marginTop: 12 }}>
        En la versión final se podrá integrar un calendario público con eventos locales.
      </p>
    </div>
  );
}
