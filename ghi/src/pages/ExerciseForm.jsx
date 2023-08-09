// import useToken from "@galvanize-inc/jwtdown-for-react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../css/ExerciseForm.css";
import Nav from "./Nav";

//TODO: Add Error Handling

const ExerciseForm = () => {
  // const navigateTo = useNavigate();
  // const { token, fetchWithToken } = useToken();
  // const [query, setQuery] = useState("");
  // const [exercises, setExercises] = useState([]);
  // const [seeExerciseButton, setSeeExerciseButton] = useState(false);
  // const [logButton, setLogButton] = useState(true);
  // const [navVisible, setNavVisible] = useState(false);

  // const handleQueryChange = (event) => {
  //   const value = event.target.value;
  //   setQuery(value);
  // };

  // const fetchData = async () => {
  //   const exerciseUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/natural/exercises`;

  //   const fetchConfig = {
  //     method: "POST",
  //     body: JSON.stringify({ query: query }),
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const response = await fetchWithToken(
  //     exerciseUrl,
  //     "POST",
  //     fetchConfig.headers,
  //     fetchConfig
  //   );
  //   setExercises(response);
  //   setQuery("");
  // };

  // const handleSeeExercise = async (event) => {
  //   event.preventDefault();

  //   fetchData();
  //   setSeeExerciseButton(true);
  //   setLogButton(false);
  // };

  // const handleLog = async (event) => {
  //   event.preventDefault();

  //   const exerciseData = [];
  //   for (let i = 0; i < exercises.length; i++) {
  //     const exercise = {};
  //     exercise["name_type"] = exercises[i].name;
  //     exercise["duration"] = exercises[i].duration_min;
  //     exercise["burned_calories"] = exercises[i].nf_calories;
  //     exerciseData.push(exercise);
  //   }

  //   const exerciseUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/exercise`;

  //   const fetchConfig = {
  //     method: "POST",
  //     body: JSON.stringify(exerciseData),
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   await fetchWithToken(
  //     exerciseUrl,
  //     "POST",
  //     fetchConfig.headers,
  //     fetchConfig
  //   );

  //   navigateTo("/exercise-history");
  // };

  // const toggleNav = () => {
  //   setNavVisible(!navVisible);
  // };

  return (
    <div>
      {/* {!navVisible && (
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
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-4 text-center">
          <h1 className="text-center">Log Exercise</h1>
          <form
            id="create-exercise-form"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            {!seeExerciseButton && (
              <div className="form-floating mb-3">
                <textarea
                  onChange={handleQueryChange}
                  placeholder="Description"
                  required
                  type="text"
                  name="Description"
                  id="Description"
                  className="form-control"
                />
                <label htmlFor="first_name">
                  Describe your workout for the day...
                </label>
                <button
                  onClick={handleSeeExercise}
                  style={{ marginTop: "10px" }}
                  className="btn btn-secondary lookup-button w-100"
                >
                  See My Exercise
                </button>
              </div>
            )}
          </form>
          {!logButton && (
            <>
              <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Type</th>
                    <th>Duration</th>
                    <th>Burned Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.map((exercise, index) => {
                    return (
                      <tr key={`${exercise.name}_${index}`} value={exercise.id}>
                        <td>{exercise.name}</td>
                        <td>{exercise.duration_min}</td>
                        <td>{exercise.nf_calories}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                onClick={handleLog}
                style={{ marginTop: "10px" }}
                className="btn btn-secondary lookup-button w-100"
              >
                Log Exercise
              </button>
            </>
          )}
          {seeExerciseButton && (
            <button
              onClick={() => window.location.reload()}
              className="btn btn-secondary return-button w-100"
              style={{ marginTop: "10px" }}
            >
              Return to Exercise Lookup
            </button>
          )}
        </div>
      </div> */}
      <h1>EXCERSIE FORM</h1>
    </div>
  );
};

export default ExerciseForm;
