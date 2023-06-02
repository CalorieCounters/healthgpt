import React, { useState } from 'react'
import useToken  from '@galvanize-inc/jwtdown-for-react';

const MealForm = () => {
    const { token, fetchWithToken } = useToken()
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
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }

        const response = await fetchWithToken(nutrientUrl, "POST", fetchConfig.headers, fetchConfig);

        setFoodItems(response)
        setQuery('');
    };

    const handleSeeNutrients = async (event) => {
        event.preventDefault();

        fetchData()
    }

    const handleLog = async (event) => {
        event.preventDefault();
        // CREATING A MEAL, BUT WE STILL NEED TO ADD FOOD ITEMS TO THE MEAL
        // TODO: Finish creating meal form with these fields
        const mealData = {
            description: 'cheese',
            name: 'cheese',
            type: 'breakfast',
            datetime_eaten: null
        };
        const mealUrl = `http://localhost:8000/api/meals/`;
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(mealData),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetchWithToken(mealUrl, "POST", fetchConfig.headers, fetchConfig);

        // This is called massaging the data to send it back to the food_items endpoint
        const newFoodItems = foodItems.map((foodItem) => {
            return {
                food_name: foodItem.food_name,
                brand_name: foodItem.brand_name,
                serving_qty: foodItem.nf_calories,
                serving_unit: foodItem.nf_calories,
                serving_weight_grams: foodItem.nf_calories,
                calories: foodItem.nf_calories,
                total_fat: foodItem.nf_calories,
                saturated_fat: foodItem.nf_calories,
                cholesterol: foodItem.nf_calories,
                sodium: foodItem.nf_calories,
                total_carbohydrate: foodItem.nf_calories,
                dietary_fiber: foodItem.nf_calories,
                sugars: foodItem.nf_calories,
                protein: foodItem.nf_calories,
                potassium: foodItem.nf_calories,
                eaten_id: response.id
            }
        })

        const foodItemUrl = `http://localhost:8000/api/food_items/${response.id}`;
        const foodItemFetchConfig = {
            method: "POST",
            body: JSON.stringify(newFoodItems),
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        };
        const foodItemsResponse = await fetchWithToken(foodItemUrl, "POST", foodItemFetchConfig.headers ,foodItemFetchConfig)

        console.log("CREATE FOOD ITEMS RESPONSE", foodItemsResponse)
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
                            <td>
                                <img style={{ width: "100px" }} alt="food item" src={foodItem.photo.thumb || "https://datalabel.com/wp-content/uploads/2022/03/placeholder-image-300x225-1.png"} />
                            </td>
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
