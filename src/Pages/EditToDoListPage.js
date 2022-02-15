import EditList from "../Components/EditList";
import "./EditToDoListPage.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function EditToDoListPage() {
  return (
    <div className="EditToDoList">
      <h2>Edit To Do List</h2>

      <section>
        <h2>During the mentrual period</h2>
        <h3>Day 1 until end of flow</h3>
        <EditList phase="period" />
      </section>
      <section>
        <h2>During the follicular phase</h2>
        <h3>Days 1 - 14</h3>
        <EditList phase="follicular" />
      </section>
      <section>
        <h2>During the luteal phase</h2>
        <h3>Days 14 - 28</h3>
        <EditList phase="luteal" />
      </section>
    </div>
  );
}

export default EditToDoListPage;
