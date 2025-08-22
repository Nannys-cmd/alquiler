import React from "react";
import "../styles/styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">🏠</div>
        <h1>GoodPlace</h1>
      </div>
      <div className="search-demo">
        <input type="text" placeholder="Ciudad o barrio" />
        <input type="date" />
        <input type="number" placeholder="Huéspedes" min="1" />
        <button className="btn">Buscar</button>
      </div>
    </header>
  );
}

