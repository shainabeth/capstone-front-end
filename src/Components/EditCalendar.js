import { useState } from "react";
import "./EditCalendar.css";

function EditCalendar({ date, onStartCycle }) {
  const [duration, setDuration] = useState(28);
  const onChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div className="EditCalendar">
      <label className="durationLabel">cycle duration:</label>{" "}
      <input type="text" value={duration} onChange={onChangeDuration} />{" "}
      <button
        className="editButton"
        onClick={() => onStartCycle(date, duration)}
      >
        Start Cycle
      </button>
    </div>
  );
}

export default EditCalendar;
