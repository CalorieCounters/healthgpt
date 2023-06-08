import React, { useEffect, useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import Chart from "chart.js/auto";
import Nav from "./Nav";

function Dashboard() {
  const [eatenMeals, setEatenMeals] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  const [calories, setCalories] = useState({
    burned: 0,
    eaten: 0,
  });
  const { token, fetchWithToken } = useToken();
  const [navVisible, setNavVisible] = useState(false);

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
    console.log("CALORIES", response);
    return response;
  };

  const fetchEatenMealsData = async () => {
    const isToday = true;
    const nutritionUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/eaten_meals/${isToday}`;

    const fetchConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const eatenMealsResponse = await fetchWithToken(
      nutritionUrl,
      "GET",
      fetchConfig.headers,
      fetchConfig
    );
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

      const mealTypeCalories = updatedEatenMeals.reduce(
        (result, innerArray) => {
          const mealType = innerArray[2];
          const calories = innerArray[innerArray.length - 1];

          if (!result[mealType]) {
            result[mealType] = 0;
          }

          result[mealType] += calories;
          return result;
        },
        {}
      );

      setMealTypes(mealTypeCalories);

      const eatenCalories = updatedEatenMeals.reduce((result, innerArray) => {
        const calories = innerArray[innerArray.length - 1];

        result += calories;
        return result;
      }, 0);

      setCalories((previousCalories) => ({
        ...previousCalories,
        eaten: eatenCalories,
      }));
    };

    fetchAll();
  };

  const fetchExerciseData = async () => {
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

    const filtered = response.filter((exercise) => {
      const exerciseDate = new Date(exercise.datetime_created);
      const today = new Date();

      const fullExerciseDate = `${
        exerciseDate.getMonth() + 1
      }-${exerciseDate.getDate()}-${exerciseDate.getFullYear()}`;

      const fullTodayDate = `${
        today.getMonth() + 1
      }-${today.getDate()}-${today.getFullYear()}`;

      return fullExerciseDate === fullTodayDate;
    });

    const burnedCalories = filtered.reduce((result, exercise) => {
      const burned = exercise.est_burned_calories;
      result += burned;
      return result;
    }, 0);

    setCalories((previousCalories) => ({
      ...previousCalories,
      burned: burnedCalories,
    }));
  };

  useEffect(() => {
    if (token) fetchEatenMealsData() && fetchExerciseData();
    // eslint-disable-next-line
  }, [token]);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    let chart;
    if (eatenMeals.length > 0) {
      chart = new Chart(document.getElementById("eatenCaloriesCharts"), {
        type: "bar",
        options: {
          animation: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
        data: {
          labels: Object.keys(mealTypes),
          datasets: [
            {
              label: "Meal Type",
              data: Object.values(mealTypes),
            },
          ],
        },
      });
    }
    return () => {
      chart?.destroy();
    };
    // eslint-disable-next-line
  }, [eatenMeals.length]);

  useEffect(() => {
    let chart;
    if (eatenMeals.length > 0) {
      chart = new Chart(document.getElementById("burnedCaloriesCharts"), {
        type: "pie",
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
        data: {
          labels: Object.keys(calories),
          datasets: [
            {
              label: "Meal Type",
              data: Object.values(calories),
            },
          ],
        },
      });
    }
    return () => {
      chart?.destroy();
    };
    // eslint-disable-next-line
  }, [eatenMeals.length]);

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
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <h2>Calories by Meal Types</h2>
      </div>
      <div>
        <canvas id="eatenCaloriesCharts" />
      </div>
      <div>
        <canvas id="burnedCaloriesCharts" />
      </div>
    </div>
  );
}

export default Dashboard;
