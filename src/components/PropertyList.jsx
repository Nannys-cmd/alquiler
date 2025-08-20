// src/components/PropertyList.jsx
import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { properties as seed } from "../data/properties"; // << importar
import "../styles/PropertyList.css";

export default function PropertyList() {
  const [properties] = useState(seed); // ya no definimos el array acá

  return (
    <div>
      <div className="properties-grid">
        {properties.map((p) => (
          <PropertyCard key={p.id} prop={p} />
        ))}
      </div>
    </div>
  );
}

