import "./HomePage.css";
import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function HomePage() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div>
      {!navVisible && (
        <button
          className="navbar-toggle"
          onClick={toggleNav}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          Menu
        </button>
      )}
      {navVisible && (
        <div
          className="overlay"
          onClick={toggleNav}
          style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
        ></div>
      )}
      <Nav navVisible={navVisible} toggleNav={toggleNav} />
      <div className="p_and_img">
        <img
          src="healthgpt.png"
          style={{ display: "block", margin: "0 auto" }}
        />
        <p>
          Our mission is to empower individuals to take control of their health
          and wellness by providing personalized solutions that help them
          achieve their goals.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "10px" }}>
          <Link to="/signup">
            <button className="button">Sign Up</button>
          </Link>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Link to="/login">
            <button className="button">Log In</button>
          </Link>
        </div>
      </div>
      <p>HealthGPT features intro</p>
      <img src="healthgpt.png" style={{ display: "block", margin: "0 auto" }} />
    </div>
  );
}

export default HomePage;

{
  /* <div className="px-4 py-5 my-5 text-center">
      {/* <h1 className="display-5 fw-bold">HealthGPT</h1> */
}
<img src="HealthGPT.png" style={{ display: "block", margin: "0 auto" }} />;
{
  /* {!navVisible && (
        <button
          className="navbar-toggle"
          onClick={toggleNav}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          Menu
        </button>
      )}
      {navVisible && (
        <div
          className="overlay"
          onClick={toggleNav}
          style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
        ></div>
      )}
      <Nav navVisible={navVisible} toggleNav={toggleNav} /> */
}
{
  /* <img className="image" src="healthgpt.png" />
   */
}
{
  /* <p>
        Our mission is to empower individuals to take control of their health
        and wellness by providing personalized solutions that help them achieve
        their goals.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "10px" }}>
          <button className="button">Sign Up</button>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <button className="button">Log In</button>
        </div>
      </div>
    </div>
  );
} */
}

// <div className="px-4 py-5 my-5 text-center">
{
  /* <h1 className="display-5 fw-bold">HealthGPT</h1> */
}
{
  /* <img src="HealthGPT.png" style={{ display: "block", margin: "0 auto" }} /> */
}
{
  /* {!navVisible && (
        <button
          className="navbar-toggle"
          onClick={toggleNav}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          Menu
        </button>
      )}
      {navVisible && (
        <div
          className="overlay"
          onClick={toggleNav}
          style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
        ></div>
      )}
      <Nav navVisible={navVisible} toggleNav={toggleNav} /> */
}
{
  /* <img className="image" src="healthgpt.png" />
   */
}
