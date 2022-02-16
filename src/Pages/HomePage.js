import ToDoList from "../Components/ToDoList";
import WeekCalendarView from "../Components/WeekCalendarView";
import "./HomePage.css";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../constants";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function HomePage({ phase, cycleDay, cycleStartDate, cycleDuration }) {
  const [tasks, setTasks] = useState([]);
  const [phaseClassName, setPhaseClassName] = useState(
    "MenstrualPhaseTextColor"
  );

  useEffect(() => {
    setPhaseClassName(`${capitalizeFirstLetter(phase)}PhaseTextColor`);
  }, [phase]);

  useEffect(() => {
    console.log(phase);
    if (phase !== null) {
      axios
        .post(
          `${URL}/api/list_tasks`,
          {},
          {
            params: {
              user: "Shaina",
              phase,
            },
          }
        )
        .then(function (response) {
          setTasks(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [phase]);

  return (
    <div className="Home">
      <section className="ToDoListSection">
        <header>
          <h3>Today's Tasks</h3>
        </header>
        {tasks.length === 0 ? (
          <span className="defaultTask">
            {" "}
            No tasks?! Add them on the edit page!
          </span>
        ) : (
          <ToDoList
            tasks={tasks}
            setTasks={setTasks}
            cycleDuration={cycleDuration}
          />
        )}
      </section>
      <br />
      <h4>
        Day {cycleDay} of Cycle:{" "}
        <span className={phaseClassName}>
          {phase} {phase !== "menstrual" ? "phase" : "period"}
        </span>
      </h4>
      <br />
      <WeekCalendarView
        cycleStartDate={cycleStartDate}
        cycleDuration={cycleDuration}
      />
    </div>
  );
}

export default HomePage;
