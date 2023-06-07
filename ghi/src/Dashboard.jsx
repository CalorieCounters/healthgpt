import React, { useEffect, useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import Nav from "./Nav";


function Dashboard() {
  // const [navVisible, setNavVisible] = useState(false);
  // const [burnCalories, setBurnCalories] = useState("");
  // const [consumeCalories, setConsumeCalories] = useState("");
  // const [healthScore, setHealthScore] = useState("");
  const [eatenMeals, setEatenMeals] = useState([])
  const { token, fetchWithToken } = useToken();

  console.log("TOKENNNN", token)
  const addMealCalories = async (mealId) => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/get_meal_calories/${mealId}`;

    const fetchConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }
    const response = await fetchWithToken(url, "GET", fetchConfig.headers, fetchConfig);
    return response
  };

  const fetchData = async () => {
    const isToday = true;
    const nutritionUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/eaten_meals/${isToday}`;
    // const exerciseUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/exercise`;
    // const accountUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`

    const fetchConfig = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    // this gets the meals for today
    const eatenMealsResponse = await fetchWithToken(nutritionUrl, "GET", fetchConfig.headers, fetchConfig)
    // maps over eatenMeals reponse and creates an array of promises
    const calorieFetches = eatenMealsResponse.map((eatenMeal) => {
      return addMealCalories(eatenMeal[0])
    })

    const fetchAll = async () => {
        const arrayOfCalories = await Promise.all(calorieFetches)

        const updatedEatenMeals = eatenMealsResponse.map((eatenMeal, i) => {
            const calorie = arrayOfCalories[i];

            return [...eatenMeal, calorie]
        })

        setEatenMeals(updatedEatenMeals);
    }

    fetchAll();

  };

  console.log("INSIDEEE", eatenMeals)

  useEffect(() => {
    if (token) fetchData()
    // eslint-disable-next-line
  }, [token])

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

  return <h1> Dashboard coming soon!</h1>;
}

export default Dashboard;
