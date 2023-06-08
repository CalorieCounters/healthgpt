import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../css/Nav.css";
import useToken from "@galvanize-inc/jwtdown-for-react";

function Nav({ navVisible, toggleNav }) {
  const { logout, token } = useToken();
  const handleLinkClick = () => {
    if (navVisible) {
      toggleNav();
    }
  };

  const handleLogout = (event) => {
    logout();
  };

  return (
    <nav className={`navbar ${navVisible ? "visible" : "hidden"}`}>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active" onClick={handleLinkClick}>
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
        <li>
          <NavLink to="/" activeclassname="active" onClick={handleLogout}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

{
  /* {menu && ( */
}
{
  /* <button
            className="navbar-toggle"
            onClick={handleCloseClick}
            style={{ position: "absolute", top: "10px", left: "100px" }}
          >
            Close
          </button> */
}
{
  /* )} */
}
{
  /* <div className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
            <div className="d-flex align-items-center">
                {!navVisible && (
                    <button
                        className="navbar-toggler"
                        onClick={toggleNav}
                        style={{marginRight: '75px'}}
                    >
                        Menu
                    </button>
                )} */
}
{
  /* // {navVisible && ( */
}
{
  /* <div className="navbar-links"> */
}
{
  /* {menu && close && ( */
}
{
  /* // {menu && ( */
}
