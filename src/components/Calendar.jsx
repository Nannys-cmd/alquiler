import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";
import { availability } from "../data/availability";

export default function CalendarComponent({ events, onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) onDateChange(date);
  };

  const tileClassName = ({ date }) => {
    const day = date.toISOString().split("T")[0];
    const state = availability[day];

    if (!state) return "";

    if (!state.booking && !state.airbnb) return "no-disponible";
    if (state.booking && state.airbnb) return "disponible";
    if (state.booking || state.airbnb) return "semi-disponible";

    return "";
  };

  const tileContent = ({ date }) => {
    const event = events.find((e) => e.date === date.toISOString().split("T")[0]);
    if (event) return <div className="event-dot" title={event.title}>•</div>;
    return null;
  };

  return (
    <div className="calendar-wrapper">
      <Calendar
        onChange={handleChange}
        value={selectedDate}
        tileClassName={tileClassName}
        tileContent={tileContent}
      />
    </div>
  );
}
