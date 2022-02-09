import { useState } from "react";
import "./EditList.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { URL } from "../constants";

function EditList({ phase }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const deleteItem = (item) => {
    setTasks(
      tasks.filter((task) => {
        return task !== item;
      })
    );
  };

  const listItems = tasks.map((task) => {
    return (
      <li>
        {task}
        <button onClick={() => deleteItem(task)}>x</button>
      </li>
    );
  });

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    setTasks((oldTasks) => [...oldTasks, task]);
    event.preventDefault();
    axios
      .post(`${URL}/api/add_task`, {
        params: {
          user: "Shaina",
          task_id: uuidv4(),
          task_name: task,
          phase: phase,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    setTask("");
  };

  return (
    <div className="EditList">
      <ul>{listItems}</ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={task} onChange={handleChange} />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditList;
