import EditList from "../Components/EditList";
import "./EditToDoListPage.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function EditToDoListPage() {
  return (
    <div className="EditToDoList">
      <h1>edit tasks</h1>

      <section className="EditToDoListSection">
        <h2>
          during the{" "}
          <span className="MenstrualPhaseTextColor">menstrual period</span>
        </h2>
        <h3>day 1 until end of flow</h3>
        <EditList phase="menstrual" />
      </section>
      <section className="EditToDoListSection">
        <h2>
          during the{" "}
          <span className="FollicularPhaseTextColor">follicular phase</span>
        </h2>
        <h3>days 1 - 14</h3>
        <EditList phase="follicular" />
      </section>
      <section className="EditToDoListSection">
        <h2>
          during the <span className="LutealPhaseTextColor">luteal phase</span>
        </h2>
        <h3>days 14 - 28</h3>
        <EditList phase="luteal" />
      </section>
    </div>
  );
}

export default EditToDoListPage;
