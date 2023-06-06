import React, {useState, useEffect } from 'react'
import useToken  from '@galvanize-inc/jwtdown-for-react';

const EatenMealList = () => {
    const { token, fetchWithToken } = useToken()
    const [eatenMeals, setEatenMeals] = useState([]);
    const [updatedEatenMeals, setUpdatedEatenMeal] = useState([])

    const fetchEatenMeals = async ()=> {
        const isToday = false;
        const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/eaten_meals/${isToday}`;

        const fetchConfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        const response = await fetchWithToken(url, "GET", fetchConfig.headers, fetchConfig);
        setEatenMeals(response);
    };


    useEffect(() => {
        if (token) fetchEatenMeals();
        // eslint-disable-next-line
    }, [token]);

    useEffect(() => {
        if (eatenMeals.length) {
            // Array of Promises
            const calorieFetches = eatenMeals.map((eatenMeal) => {
                return addMealCalories(eatenMeal[0])
            })

            const fetchAll = async () => {
                const arrayOfCalories = await Promise.all(calorieFetches)

                const updatedEatenMeals = eatenMeals.map((eatenMeal, i) => {
                    const calorie = arrayOfCalories[i];

                    return [...eatenMeal, calorie]
                })

                setUpdatedEatenMeal(updatedEatenMeals);
            }

            fetchAll();
        }
    }, [eatenMeals, token])

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


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <h1 className="text-center">My Eaten Meals</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Meal Calories</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                    {updatedEatenMeals.map((eatenMeal) => {
                        console.log(eatenMeal)
                        return (
                            <tr key={eatenMeal[0]} value={eatenMeal[0]}>
                                <td>{eatenMeal[1]}</td>
                                <td>{eatenMeal[2]}</td>
                                <td>{eatenMeal[eatenMeal.length - 1]}</td>
                                <td>{eatenMeal[3] ? eatenMeal[3]: "No date entered"}</td>

                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EatenMealList
