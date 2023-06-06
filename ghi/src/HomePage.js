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
      <div className="container py-4">
    <h1 className="mb-4">What we're here for</h1>
    <div className="accordion" id="faqAccordion">
    <div className="accordion-item">
        <h2 className="accordion-header" id="faqHeading1">
        <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faqCollapse1"
            aria-expanded="false"
            aria-controls="faqCollapse1"
        >
            Track your consumption
        </button>
        </h2>
        <div
        id="faqCollapse1"
        className="accordion-collapse collapse"
        aria-labelledby="faqHeading1"
        data-bs-parent="#faqAccordion"
        >
        <div className="accordion-body">
            Using our meal submission form, easily track your
            nutritional intake. HealthGPT will log your meals
            along with all the assocoiated nutritional content.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="faqHeading2">
        <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faqCollapse2"
            aria-expanded="false"
            aria-controls="faqCollapse2"
        >
            Track your workouts
        </button>
        </h2>
        <div
        id="faqCollapse2"
        className="accordion-collapse collapse"
        aria-labelledby="faqHeading2"
        data-bs-parent="#faqAccordion"
        >
        <div className="accordion-body">
          Using our exercise submission form, track your
          workouts and the calories you burn in the process.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="faqHeading3">
        <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faqCollapse3"
            aria-expanded="false"
            aria-controls="faqCollapse3"
        >
            Be your best self
        </button>
        </h2>
        <div
        id="faqCollapse3"
        className="accordion-collapse collapse"
        aria-labelledby="faqHeading3"
        data-bs-parent="#faqAccordion"
        >
        <div className="accordion-body">
          HealthGPT will use your meal and workout submissions
          to give you a birds eye view of your health in real time.
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default HomePage;