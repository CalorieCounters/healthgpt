import "./HomePage.css";
import React, {useState} from 'react';
import Nav from './Nav'
import {NavLink} from 'react-router-dom';


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
        style={{ position: 'absolute', top: '10px', left: '10px' }}
        >
          Menu
        </button>
      )}
      {navVisible && (
        <div
          className="overlay"
          onClick={toggleNav}
          style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}
        ></div>
      )}
      <Nav navVisible={navVisible} toggleNav={toggleNav} />
      <p>
        Our mission is to empower individuals to take control of their
        health and wellness by providing personalized solutions that help
        them achieve their goals.
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{marginRight:'10px'}}>
        <button className="button">Sign Up</button>
      </div>
      <div style={{marginLeft: '10px'}}>
        <button className="button">Log In</button>
      </div>
      </div>
        
      </div>
  );
}

export default HomePage;