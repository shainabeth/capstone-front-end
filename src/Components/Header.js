import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" className="HeaderLink">
      <div className="Header">
        <h1 className="HeaderContent">kisma</h1>
      </div>
    </Link>
  );
}

export default Header;
