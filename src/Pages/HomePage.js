import ToDoList from "../Components/ToDoList";
import WeekCalendarView from "../Components/WeekCalendarView";
import "./HomePage.css";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

function HomePage() {
  return (
    <div className="Home">
      <NavBar />
      <ToDoList
        tasks={[
          "drink raspberry leaf tea",
          "take pumpkin and sesame seeds",
          "practice yoga",
        ]}
      />
      <span>On Day x of Cycle</span>
      <WeekCalendarView />
    </div>
  );
}

export default HomePage;
