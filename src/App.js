import { Route, Routes, NotFoundRoute } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import EditToDoListPage from "./Pages/EditToDoListPage";
import CalendarPage from "./Pages/CalendarPage";
import InfoPage from "./Pages/InfoPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "./constants";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  const [phase, setPhase] = useState("period");
  const [cycleDay, setCycleDay] = useState(1);
  const [cycleDuration, setCycleDuration] = useState(28);
  const [cycleStartDate, setCycleStartDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`${URL}/api/get_cycle_info`, {
        params: {
          user: "Shaina",
        },
      })
      .then(function (response) {
        console.log(response);
        setCycleDuration(parseInt(response.data.duration));
        setCycleStartDate(new Date(response.data.date));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const now = new Date();
    if (now < cycleStartDate) {
      setPhase(null);
    }
    console.log(now, cycleStartDate, cycleDuration);

    // To calculate the time difference of two dates
    var diffInTime = now.getTime() - cycleStartDate.getTime();
    // To calculate the no. of days between two dates
    var diffInDays = diffInTime / (1000 * 3600 * 24);

    const cycleDay = Math.floor(diffInDays % cycleDuration);
    setCycleDay(Math.floor(cycleDay + 1));
    if (cycleDay < 7) {
      setPhase("period");
    } else if (cycleDay < cycleDuration / 2) {
      setPhase("follicular");
    } else {
      setPhase("luteal");
    }
  }, [cycleStartDate, cycleDuration]);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route exact path="/">
          <Route
            path="/"
            element={
              <HomePage
                phase={phase}
                cycleDay={cycleDay}
                cycleStartDate={cycleStartDate}
                cycleDuration={cycleDuration}
              />
            }
          />
          <Route path="/edit" element={<EditToDoListPage />} />
          <Route
            path="/calendar"
            element={
              <CalendarPage
                cycleDuration={cycleDuration}
                setCycleDuration={setCycleDuration}
                cycleStartDate={cycleStartDate}
                setCycleStartDate={setCycleStartDate}
              />
            }
          />
          <Route path="/info" element={<InfoPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
