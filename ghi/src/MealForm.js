import React, { useState, useEffect } from 'react'
import useToken from "@galvanize-inc/jwtdown-for-react";

const MealForm = () => {
    const {fetchWithToken} = useToken()
    const [query, setQuery] = useState('');
    const [foodItems, setFoodItems] = useState([]);

    const foodGroups = ["Zero", "Dairy", "Protein", "Fruit", "Vegetable", "Grain", "Fat", "Legume", "Combination", "N/A",];

    const handleQueryChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    }

    const fetchData = async ()=> {
        const nutrientUrl = `http://localhost:8000/natural/nutrients`;

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify({'query': query}),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(nutrientUrl, fetchConfig);

        if (response.ok) {
            const meal = await response.json()

            setQuery('');
            setFoodItems(meal);
        }
    };

    const handleSeeNutrients = async (event) => {
        event.preventDefault();

        fetchData()
    }


    const handleLog = async (event) => {
        event.preventDefault();

        const data = {};
        data.foodItems = foodItems;
        console.log("THE DARTA", data)

        const mealUrl = `http://localhost:8000/api/meals`;
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(mealUrl, fetchConfig);
        if (response.ok) {
            const meal = await response.json()
            setFoodItems([]);
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <h1 className="text-center">Log a Meal</h1>
                <form onSubmit={handleSeeNutrients} id="create-appointment-form">

                <div className="form-floating mb-3">
                    <textarea onChange={handleQueryChange} placeholder="Description" required type="text" name="Description" id="Description" className="form-control" value={query}/>
                    <label htmlFor="first_name">Describe your meal...</label>
                </div>

                <button className="btn btn-primary w-100">See Nutrients</button>
                </form>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Amount</th>
                            <th>Food item</th>
                            <th>Calories</th>
                            <th>Food Group</th>
                        </tr>
                    </thead>
                    <tbody>
                    {foodItems.map((foodItem, index) => {
                        return (
                        <tr key={`${foodItem.food_name}_${index}`} value={foodItem.id}>
                            <td><img src={foodItem.photo.thumb} style={{width:"100px"}} /></td>
                            <td>{foodItem.serving_qty} {foodItem.serving_unit}</td>
                            <td>{foodItem.food_name}</td>
                            <td>{foodItem.nf_calories}</td>
                            <td>{foodGroups[foodItem.tags.food_group]}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                <button onClick={handleLog} className="btn btn-success w-100">Log Meal</button>
            </div>
        </div>
    )
}

export default MealForm