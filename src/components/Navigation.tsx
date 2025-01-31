import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          MILKWORM
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/band"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            BAND
          </NavLink>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}
