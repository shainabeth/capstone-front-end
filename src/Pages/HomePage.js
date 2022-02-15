import ToDoList from "../Components/ToDoList";
import WeekCalendarView from "../Components/WeekCalendarView";
import "./HomePage.css";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../constants";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function HomePage({ phase, cycleDay, cycleStartDate, cycleDuration }) {
  const [tasks, setTasks] = useState([]);

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
          <h3>Today's To Do List</h3>
          <h4>
            Day {cycleDay} of Cycle: {phase} phase
          </h4>
        </header>
        <ToDoList
          tasks={tasks}
          setTasks={setTasks}
          cycleDuration={cycleDuration}
        />
      </section>
      <br />
      <br />
      <WeekCalendarView
        cycleStartDate={cycleStartDate}
        cycleDuration={cycleDuration}
      />
    </div>
  );
}

export default HomePage;
