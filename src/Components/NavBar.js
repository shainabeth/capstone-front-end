import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import EditCalendar from "../Components/EditCalendar";
import "./NavBar.css";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggle = (value, event) => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className="NavBar">
      <button onClick={toggle}>+</button>
      {showNavBar && (
        <nav>
          <div className="NavLinkContainer">
            <Link to="/">Home</Link>
          </div>
          <div className="NavLinkContainer">
            <Link to="/edit">Edit</Link>
          </div>
          <div className="NavLinkContainer">
            <Link to="/calendar">Calendar</Link>
          </div>
          <div className="NavLinkContainer">
            <Link to="/info">Info</Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
