import { useState } from "react";
import "./EditCalendar.css";

function EditCalendar({ date, onStartCycle }) {
  const [duration, setDuration] = useState(28);
  const onChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div className="Calendar">
      <label>Cycle duration:</label>{" "}
      <input type="text" value={duration} onChange={onChangeDuration} />
      <button onClick={() => onStartCycle(date, duration)}>Start cycle</button>
    </div>
  );
}

export default EditCalendar;
