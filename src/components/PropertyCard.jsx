import React from "react";
import "../styles/PropertyCard.css";

export default function PropertyCard({ prop }) {
  return (
    <article className="card" aria-labelledby={"p" + prop.id}>
      {/* Imagen con overlay */}
      <div className="image-wrapper">
        <img src={prop.img} alt={prop.title} />
        <div className="overlay">
          <span
            className={`status ${prop.available ? "available" : "unavailable"}`}
          >
            {prop.available ? "Disponible" : "No disponible"}
          </span>

          {prop.price && (
            <span
              className="price-tag"
              aria-label={`Precio ${prop.price} dólares por noche`}
            >
              {"US$ " +
                new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 0,
                }).format(prop.price)}{" "}
              / noche
            </span>
          )}
        </div>
      </div>

      {/* Contenido debajo de la imagen */}
      <div className="card-content">
        <h3 id={"p" + prop.id}>{prop.title}</h3>
        <p className="muted">{prop.subtitle}</p>
        <div className="actions">
          <a
            className="btn"
            href={prop.airbnbLink}
            target="_blank"
            rel="noreferrer"
          >
            Ver en Airbnb
          </a>
          <a className="btn" href="#contact">
            Reservar
          </a>
        </div>
      </div>
    </article>
  );
}
