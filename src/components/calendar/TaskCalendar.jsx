import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TaskCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="card">

      {/* SIMPLE HEADING */}
      <h3 className="calendar-title">Calendar</h3>

      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>

    </div>
  );
};

export default TaskCalendar;