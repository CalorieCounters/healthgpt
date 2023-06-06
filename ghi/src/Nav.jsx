import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.css";

function Nav({ navVisible, toggleNav }) {
  const handleLinkClick = () => {
    if (navVisible) {
      toggleNav();
    }
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
            to="/log-a-meal"
            activeclassname="active"
            onClick={handleLinkClick}
          >
            Log a meal
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
