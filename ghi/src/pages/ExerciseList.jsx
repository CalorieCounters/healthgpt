import React, { useEffect, useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import "./ExerciseList.css";

const ExerciseList = () => {
  const { token, fetchWithToken } = useToken();
  const [exercises, setExercises] = useState([]);

  console.log("EXERCISES", exercises);
  useEffect(() => {
    const fetchExercises = async () => {
      const exerciseUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/exercises`;

      const fetchConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetchWithToken(
        exerciseUrl,
        "GET",
        fetchConfig.headers,
        fetchConfig
      );

      setExercises(response);
    };

    if (token) fetchExercises();
    // eslint-disable-next-line
  }, [token]);

  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-6 text-center">
        <h1>My Exercises</h1>
        <div className="exercise-table-container">
          <table
            className="table table-striped table-bordered table-hover"
            style={{ maxWidth: "900px" }}
          >
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Burned Calories</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise, index) => {
                return (
                  <tr key={`${exercise.name}_${index}`} value={exercise.id}>
                    <td>{exercise.name}</td>
                    <td>{exercise.duration}</td>
                    <td>{exercise.est_burned_calories}</td>
                    <td>{exercise.datetime_created}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
