import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import "../styles/PropertyList.css";

const sampleProperties = [
  {
    id: 1,
    title: "Departamento San Telmo",
    subtitle: "2 dormitorios · Centro · 2 cuadras del bar GPT",
    img: "/sample1.jpg",
    available: true,
    price: 4500,
    airbnbLink: "#",
  },
  {
    id: 2,
    title: "Loft Palermo",
    subtitle: "1 dormitorio · Palermo · 3 cuadras del bar GPT",
    img: "/sample2.jpg",
    available: false,
    price: 3800,
    airbnbLink: "#",
  },
];

export default function PropertyList() {
  const [properties, setProperties] = useState(sampleProperties);

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
