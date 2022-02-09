import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import EditToDoListPage from "./Pages/EditToDoListPage";
import CalendarPage from "./Pages/CalendarPage";
import InfoPage from "./Pages/InfoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditToDoListPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
