import EditList from "../Components/EditList";
import "./EditToDoListPage.css";
import NavBar from "../Components/NavBar";

function EditToDoListPage() {
  return (
    <div className="EditToDoList">
      <NavBar />
      <h1>Edit To Do List</h1>
      <h2>During the mentrual period</h2>
      <h3>Day 1 until end of flow</h3>
      <EditList phase="period" />
      <h2>During the follicular phase</h2>
      <h3>Days 1 - 14</h3>
      <EditList phase="follicular" />
      <h2>During the luteal phase</h2>
      <h3>Days 14 - 28</h3>
      <EditList phase="luteal" />
    </div>
  );
}

export default EditToDoListPage;
