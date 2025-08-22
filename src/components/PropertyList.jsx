import React from "react";
import PropertyCard from "./PropertyCard";
import "../styles/PropertyList.css";

export default function PropertyList({ properties }) {
  return (
    <div className="properties-grid">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}
