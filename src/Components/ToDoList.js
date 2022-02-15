import "./ToDoList.css";
import axios from "axios";
import { URL } from "../constants";

function ToDoList({ tasks, setTasks, cycleDuration }) {
  const wasCompletedThisCycle = (date) => {
    if (date === null || !date || date === "") {
      return false;
    }
    // To calculate the time difference of two dates
    var diffInTime = new Date().getTime() - new Date(date).getTime();

    // To calculate the no. of days between two dates
    var diffInDays = diffInTime / (1000 * 3600 * 24);

    if (diffInDays < cycleDuration) {
      return true;
    }
    return false;
  };

  const handleCheckBox = (task) => {
    const isCurrentlyChecked = wasCompletedThisCycle(task.last_completed_date);
    axios
      .post(
        `${URL}/api/update_task_completion_date`,
        {},
        {
          params: {
            ...task,
            last_completed_date: isCurrentlyChecked ? null : new Date(),
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTasks((oldTasks) =>
      oldTasks.map((oldTask) => {
        if (task.task_id === oldTask.task_id) {
          return {
            ...oldTask,
            last_completed_date: isCurrentlyChecked ? null : new Date(),
          };
        }
        return oldTask;
      })
    );
  };

  const listItems = tasks.map((task) => {
    const wasCompleted = wasCompletedThisCycle(task.last_completed_date);
    return (
      <li key={task.task_id}>
        <input
          type="checkbox"
          checked={wasCompleted}
          onChange={() => handleCheckBox(task)}
        />
        {wasCompleted ? <strike>{task.task_name}</strike> : task.task_name}
      </li>
    );
  });

  return (
    <div className="ToDoList">
      <ul>{listItems}</ul>
    </div>
  );
}

export default ToDoList;
