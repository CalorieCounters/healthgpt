import React, { useEffect, useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import Nav from "./Nav";

function Dashboard() {
  // const [navVisible, setNavVisible] = useState(false);
  // const [burnCalories, setBurnCalories] = useState("");
  // const [consumeCalories, setConsumeCalories] = useState("");
  // const [healthScore, setHealthScore] = useState("");
  const [eatenMeals, setEatenMeals] = useState([]);
  const { token, fetchWithToken } = useToken();
  const [navVisible, setNavVisible] = useState(false);

  console.log("TOKENNNN", token);
  const addMealCalories = async (mealId) => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/get_meal_calories/${mealId}`;

    const fetchConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetchWithToken(
      url,
      "GET",
      fetchConfig.headers,
      fetchConfig
    );
    return response;
  };

  const fetchData = async () => {
    const isToday = true;
    const nutritionUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/eaten_meals/${isToday}`;
    // const exerciseUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/exercise`;
    // const accountUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`

    const fetchConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    // this gets the meals for today
    const eatenMealsResponse = await fetchWithToken(
      nutritionUrl,
      "GET",
      fetchConfig.headers,
      fetchConfig
    );
    // maps over eatenMeals reponse and creates an array of promises
    const calorieFetches = eatenMealsResponse.map((eatenMeal) => {
      return addMealCalories(eatenMeal[0]);
    });

    const fetchAll = async () => {
      const arrayOfCalories = await Promise.all(calorieFetches);

      const updatedEatenMeals = eatenMealsResponse.map((eatenMeal, i) => {
        const calorie = arrayOfCalories[i];

        return [...eatenMeal, calorie];
      });

      setEatenMeals(updatedEatenMeals);
    };

    fetchAll();
  };

  console.log("INSIDEEE", eatenMeals);

  useEffect(() => {
    if (token) fetchData();
    // eslint-disable-next-line
  }, [token]);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  // const handleBurnCaloriesChange = (event) => {
  //   const value = event.target.value;
  //   setBurnCalories(value);
  // };

  // const handleConsumeCaloriesChange = (event) => {
  //   const value = event.target.value;
  //   setConsumeCalories(value);
  // };

  // const handleHealthScoreChange = (event) => {
  //   const value = event.target.value;
  //   setHealthScore(value);
  // };

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
      <h1>Hold my beer new shit be comin!</h1>
    </div>
  );
}

export default Dashboard;
