import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EditCalendar from "../Components/EditCalendar";
import "./CalendarPage.css";
import NavBar from "../Components/NavBar";

function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState(null);

  const onClickDay = (value, event) => {
    console.log(value);
    console.log(selectedDay);
    if (
      selectedDay !== null &&
      selectedDay.getFullYear() === value.getFullYear() &&
      selectedDay.getMonth() === value.getMonth() &&
      selectedDay.getDate() === value.getDate()
    ) {
      setSelectedDay(null);
    } else {
      setSelectedDay(value);
    }
  };

  return (
    <div className="Calendar">
      <NavBar />
      <Calendar minDetail="month" onClickDay={onClickDay} />
      {selectedDay !== null && <EditCalendar day={selectedDay} />}
    </div>
  );
}

export default CalendarPage;
