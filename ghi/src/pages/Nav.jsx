import { NavLink } from "react-router-dom";
import React from "react";
import "../css/Nav.css";
// import useToken from "@galvanize-inc/jwtdown-for-react";

//TODO: Add Error Handling

function Nav({ navVisible, toggleNav }) {
  // const { logout } = useToken();
  const handleLinkClick = () => {
    if (navVisible) {
      toggleNav();
    }
  };

  const handleLogout = (event) => {
    // logout();
  };

  return (
    <nav className={`navbar ${navVisible ? "visible" : "hidden"}`}>
      <ul>
        <li>
          <h4>
            <u>
              <i>General</i>
            </u>
          </h4>
          <ul className="sub-links">
            <li>
              <NavLink
                to="/"
                activeclassname="active"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                activeclassname="active"
                onClick={handleLinkClick}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeclassname="active" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            <u>
              <i>Nutrition</i>
            </u>
          </h4>
          <ul className="sub-links">
            <li>
              <NavLink
                to="/log-meal"
                activeclassname="active"
                onClick={handleLinkClick}
              >
                Log a meal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meal-history"
                activeclassname="active"
                onClick={handleLinkClick}
              >
                Eaten Meals
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            <u>
              <i>Fitness</i>
            </u>
          </h4>
          <ul className="sub-links">
            <li>
              <NavLink
                to="/log-exercise"
                activeclassname="active"
                onClick={handleLinkClick}
              >
                Log an Exercise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exercise-history"
                activeclassname="active"
                onClick={handleLinkClick}
              >
                My Exercises
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
