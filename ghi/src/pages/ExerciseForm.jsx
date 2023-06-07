import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExerciseForm = () => {
  const navigateTo = useNavigate();
  const { token, fetchWithToken } = useToken();
  const [query, setQuery] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleQueryChange = (event) => {
    const value = event.target.value;
    console.log("QUERY", value);
    setQuery(value);
  };

  const fetchData = async () => {
    const exerciseUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/natural/exercises`;

    const fetchConfig = {
      method: "POST",
      body: JSON.stringify({ query: query }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetchWithToken(
      exerciseUrl,
      "POST",
      fetchConfig.headers,
      fetchConfig
    );
    console.log("RESPONSE", response);
    setExercises(response);
    setQuery("");
  };

  const handleSeeExercise = async (event) => {
    event.preventDefault();

    fetchData();
  };

  // console.log("LOOK", exerciseData);
  const handleLog = async (event) => {
    event.preventDefault();

    const exerciseData = [];
    for (let i = 0; i < exercises.length; i++) {
      console.log(exercises[i]);
      const exercise = {};
      exercise["name_type"] = exercises[i].name;
      exercise["duration"] = exercises[i].duration_min;
      exercise["burned_calories"] = exercises[i].nf_calories;
      exerciseData.push(exercise);
    }

    console.log("EXERCISES", exerciseData);

    const exerciseUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/exercise`;

    const fetchConfig = {
      method: "POST",
      body: JSON.stringify({ exercises: exerciseData }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetchWithToken(
      exerciseUrl,
      "POST",
      fetchConfig.headers,
      fetchConfig
    );

    console.log("HERERE RESPONSE", response);
    navigateTo("/exercise-list");
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <h1 className="text-center">Log Exercise</h1>
        <form onSubmit={handleSeeExercise} id="create-exercise-form">
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
          </div>
          <button className="btn btn-primary w-100">See My Exercise</button>
        </form>
        <table>
          <thead>
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
        <button onClick={handleLog} className="btn btn-success w-100">
          Log Exercise
        </button>
      </div>
    </div>
  );
};

export default ExerciseForm;
