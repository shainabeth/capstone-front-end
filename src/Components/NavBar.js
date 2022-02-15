import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import EditCalendar from "../Components/EditCalendar";
import "./NavBar.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggle = (value, event) => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className="NavBar">
      <button onClick={toggle}>
        {showNavBar ? (
          <MdClose className="navbutton-close" />
        ) : (
          <FiMenu className="navbutton-open" />
        )}
      </button>
      {showNavBar && (
        <nav>
          <Link to="/" className="navLink" onClick={toggle}>
            <div className="NavLinkContainer">Home</div>
          </Link>
          <Link to="/edit" className="navLink" onClick={toggle}>
            <div className="NavLinkContainer">Edit</div>
          </Link>
          <Link to="/calendar" className="navLink" onClick={toggle}>
            <div className="NavLinkContainer">Calendar</div>
          </Link>
          <Link to="/info" className="navLink" onClick={toggle}>
            <div className="NavLinkContainer">Info</div>
          </Link>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
