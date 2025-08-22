/*PropertyCard.jsx*/
import React from "react";
import "../styles/PropertyCard.css";

export default function PropertyCard({ property }) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={property.img} alt={property.title} />
        <div className="overlay">
          <span className={`status ${property.available ? "available" : "unavailable"}`}>
            {property.available ? "Disponible" : "No disponible"}
          </span>
          <span className="price-tag">USD {property.price}/noche</span>
        </div>
      </div>
      <div className="card-content">
        <h3>{property.title}</h3>
        <p className="muted">{property.subtitle}</p>
        <div className="actions">
          <a
            href={property.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver en Booking.com
          </a>
        </div>
      </div>
    </div>
  );
}
