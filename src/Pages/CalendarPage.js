import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EditCalendar from "../Components/EditCalendar";
import "./CalendarPage.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { URL } from "../constants";

function CalendarPage({
  cycleStartDate,
  setCycleStartDate,
  cycleDuration,
  setCycleDuration,
}) {
  const [selectedDay, setSelectedDay] = useState(null);

  const onClickDay = (value, event) => {
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

  const onStartCycle = (date, duration) => {
    axios
      .post(
        `${URL}/api/start_cycle`,
        {},
        {
          params: {
            user: "Shaina",
            date,
            duration,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setCycleStartDate(date);
    setCycleDuration(duration);
  };

  const calendarTileClassname = ({ activeStartDate, date, view }) => {
    // console.log("CALLED", cycleStartDate);
    if (date < cycleStartDate) {
      return "grayDate";
    }
    // To calculate the time difference of two dates
    var diffInTime = date.getTime() - cycleStartDate.getTime();
    // To calculate the no. of days between two dates
    var diffInDays = diffInTime / (1000 * 3600 * 24);

    const cycleDay = diffInDays % cycleDuration;
    if (cycleDay < 7) {
      return "redDate";
    } else if (cycleDay < cycleDuration / 2) {
      return "blueDate";
    } else {
      return "greenDate";
    }
  };

  return (
    <div className="Calendar">
      <Calendar
        minDetail="month"
        onClickDay={onClickDay}
        tileClassName={calendarTileClassname}
      />
      {selectedDay !== null && (
        <EditCalendar date={selectedDay} onStartCycle={onStartCycle} />
      )}
      <br />
      <br />
    </div>
  );
}

export default CalendarPage;
