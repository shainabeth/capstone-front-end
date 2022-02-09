import "./ToDoList.css";

function ToDoList({ tasks }) {
  console.log(tasks);

  const listItems = tasks.map((task) => {
    return <li>{task}</li>;
  });

  return (
    <div className="ToDoList">
      <h3>Today's To Do List</h3>
      <ul>{listItems}</ul>
    </div>
  );
}

export default ToDoList;
