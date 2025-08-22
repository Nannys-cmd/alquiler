/* PropertyList.jsx */
import React from "react";
import PropertyCard from "./PropertyCard";
import Slider from "react-slick";
import "../styles/PropertyList.css";

// Importar los estilos de react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function PropertyList({ properties }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // cantidad de cards visibles
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // pantallas medianas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // pantallas chicas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="properties-carousel">
      <Slider {...settings}>
        {properties.map((p) => (
          <div key={p.id}>
            <PropertyCard property={p} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
