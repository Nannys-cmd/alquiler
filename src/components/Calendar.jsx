import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { es } from "date-fns/locale";
import "../styles/Calendar.css";

const Calendar = ({ events = [] }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const dayEvents = events.filter((event) =>
        isSameDay(new Date(event.date), day)
      );

      days.push(
        <div
          key={day}
          className={`day ${!isSameMonth(day, monthStart) ? "disabled" : ""} ${
            isSameDay(day, today) ? "today" : ""
          }`}
          data-tooltip={
            dayEvents.length > 0 ? dayEvents.map((e) => e.title).join(", ") : ""
          }
        >
          <span className="date">{format(day, "d")}</span>
          {dayEvents.length > 0 && <span className="event-dot"></span>}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="week" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          ◀
        </button>
        <h2>{format(monthStart, "MMMM yyyy", { locale: es })}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          ▶
        </button>
      </div>

      <div className="week days-header">
        <div>Dom</div>
        <div>Lun</div>
        <div>Mar</div>
        <div>Mié</div>
        <div>Jue</div>
        <div>Vie</div>
        <div>Sáb</div>
      </div>

      {rows}
    </div>
  );
};

export default Calendar;
