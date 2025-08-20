import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../styles/Calendar.css"; // tu css personalizado

export default function Calendar() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  return (
    <div className="calendar-container">
      <h3>Selecciona tus fechas</h3>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        minDate={new Date()}
      />

      <div className="selected-dates">
        <p>
          <strong>Check-in:</strong>{" "}
          {range[0].startDate.toLocaleDateString("es-AR")}
        </p>
        <p>
          <strong>Check-out:</strong>{" "}
          {range[0].endDate.toLocaleDateString("es-AR")}
        </p>
      </div>
    </div>
  );
}
