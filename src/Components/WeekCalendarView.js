import { useEffect, useState } from "react";
import "./WeekCalendarView.css";

const dayNames = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

function WeekCalendarView({ cycleStartDate, cycleDuration }) {
  const [dates, setDates] = useState([]);
  const [classNames, setClassNames] = useState([]);

  // TODO: start on sunday
  useEffect(() => {
    const newDates = [];
    // Add next 7 days to dates
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start on the previous sunday
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(startDate);
      nextDate.setDate(nextDate.getDate() + i);
      newDates.push(nextDate);
    }
    console.log(`rendering: ${newDates}`);
    setDates(newDates);
  }, []);

  useEffect(() => {
    setClassNames(
      dates.map((date) => {
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
      })
    );
  }, [cycleStartDate, cycleDuration, dates]);

  let dateDivs = [];
  if (dates.length === classNames.length) {
    dateDivs = classNames.map((className, i) => {
      // TODO - highlight current date
      const today = new Date();
      let highlight = false;
      if (
        dates[i].getFullYear() === today.getFullYear() &&
        dates[i].getMonth() === today.getMonth() &&
        dates[i].getDate() === today.getDate()
      ) {
        highlight = true;
      }

      return (
        <div key={i} className={["dateBox", highlight && "today"].join(" ")}>
          <span className="dateTitle">{dayNames[dates[i].getDay()]}</span>
          <div className="dateBody">
            <div className={[className, "dot"].join(" ")} />
          </div>
        </div>
      );
    });
  }

  // console.log(dateDivs);
  return (
    <div className="WeekCalendarView">
      <div className="dateBoxContainer">{dateDivs}</div>
    </div>
  );
}

export default WeekCalendarView;
