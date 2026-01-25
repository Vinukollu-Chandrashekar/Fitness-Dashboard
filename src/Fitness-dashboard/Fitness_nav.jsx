import { Link, NavLink } from "react-router-dom";
import icon from "./Gym_icon.png";

export default function FitnessDashboardNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm py-2 px-5">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            className="img-fluid rounded-circle"
            height="40"
            width="40"
            src={icon}
            alt="Gym"
          />
        </Link>

        <ul className="navbar-nav ms-auto gap-4">
          <li className="nav-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/workout"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Workout
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/bmi"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              BMI
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
