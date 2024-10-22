"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <div>
      <h3>Dias Disponiveis</h3>
      <FullCalendar initialView="dayGridMonth" plugins={[dayGridPlugin]} />
    </div>
  );
};

export default Calendar;
