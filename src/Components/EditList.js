import { useEffect, useState } from "react";
import "./EditList.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { URL } from "../constants";
import { AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

function EditList({ phase }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingTask, setEditingTask] = useState("");
  const [editTaskValue, setEditTaskValue] = useState("");

  useEffect(() => {
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
  }, [phase]);

  const deleteItem = (task_id) => {
    axios
      .post(
        `${URL}/api/delete_task`,
        {},
        {
          params: {
            user: "Shaina",
            task_id,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTasks(
      tasks.filter((task) => {
        return task.task_id !== task_id;
      })
    );
  };

  const updateEditTaskValue = (event) => {
    setEditTaskValue(event.target.value);
  };

  const saveEditTask = (task_id) => {
    axios
      .post(
        `${URL}/api/update_task_name`,
        {},
        {
          params: {
            user: "Shaina",
            task_id,
            task_name: editTaskValue,
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
      oldTasks.map((task) => {
        if (task.task_id === task_id) {
          return { ...task, task_name: editTaskValue };
        }
        return task;
      })
    );
    setEditTaskValue("");
    setEditingTask("");
  };

  const listItems = tasks.map((task) => {
    return (
      <li key={task.task_id}>
        <div>
          {task.task_id === editingTask ? (
            <>
              <input
                type="text"
                value={editTaskValue}
                onChange={(e) => updateEditTaskValue(e)}
              />
              <button onClick={() => saveEditTask(task.task_id)}>save</button>
            </>
          ) : (
            <>
              {task.task_name}
              <button
                onClick={() => {
                  setEditingTask(task.task_id);
                  setEditTaskValue(task.task_name);
                }}
              >
                <BiPencil />
              </button>
              <button onClick={() => deleteItem(task.task_id)}>
                <AiOutlineDelete />
              </button>
            </>
          )}
        </div>
      </li>
    );
  });

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    const newTask = {
      user: "Shaina",
      task_id: uuidv4(),
      task_name: task,
      phase: phase,
      last_completed_date: null,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
    event.preventDefault();
    axios
      .post(
        `${URL}/api/add_task`,
        {},
        {
          params: newTask,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setTask("");
  };

  return (
    <div className="EditList">
      <ul>{listItems}</ul>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="New Task"
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditList;
