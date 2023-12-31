import React, { useState } from "react";
// import useToken from "@galvanize-inc/jwtdown-for-react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import "../css/MealForm.css";

//TODO: Add Error Handling

const MealForm = () => {
  // const navigateTo = useNavigate();
  // const { token, fetchWithToken } = useToken();
  // const [query, setQuery] = useState("");
  // const [foodItems, setFoodItems] = useState([]);
  // const [navVisible, setNavVisible] = useState(false);
  // const [description, setDescription] = useState("");
  // const [name, setName] = useState("");
  // const [type, setType] = useState("");
  // const [dateTimeEaten, setDateTimeEaten] = useState("");
  // const [showNutrients, setShowNutrients] = useState(false);
  // const [saveButton, setSaveButton] = useState(false);

  // const foodGroups = [
  //   "Zero",
  //   "Dairy",
  //   "Protein",
  //   "Fruit",
  //   "Vegetable",
  //   "Grain",
  //   "Fat",
  //   "Legume",
  //   "Combination",
  //   "N/A",
  // ];

  // const handleQueryChange = (event) => {
  //   const value = event.target.value;
  //   setQuery(value);
  // };

  // const toggleNav = () => {
  //   setNavVisible(!navVisible);
  // };

  // const handleDescriptionChange = (event) => {
  //   const value = event.target.value;
  //   setDescription(value);
  // };

  // const handleNameChange = (event) => {
  //   const value = event.target.value;
  //   setName(value);
  // };

  // const handleDateTimeEatenChange = (event) => {
  //   const value = event.target.value;
  //   setDateTimeEaten(value);
  // };

  // const handleTypeChange = (event) => {
  //   const value = event.target.value;
  //   setType(value);
  // };

  // const handleSaveButtonChange = (event) => {
  //   setSaveButton(true);
  // };

  // const fetchData = async () => {
  //   const nutrientUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/natural/nutrients`;

  //   const fetchConfig = {
  //     method: "POST",
  //     body: JSON.stringify({ query: query }),
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const response = await fetchWithToken(
  //     nutrientUrl,
  //     "POST",
  //     fetchConfig.headers,
  //     fetchConfig
  //   );

  //   setFoodItems(response);
  //   setQuery("");
  //   setShowNutrients(true);
  // };

  // const handleSeeNutrients = async (event) => {
  //   event.preventDefault();
  //   fetchData();
  // };

  // const handleLog = async (event) => {
  //   setSaveButton(false);
  //   setShowNutrients(false);
  //   event.preventDefault();

  //   const mealData = {
  //     description: description,
  //     name: name,
  //     type: type,
  //     datetime_eaten: dateTimeEaten,
  //   };
  //   const mealUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/meals`;
  //   const fetchConfig = {
  //     method: "POST",
  //     body: JSON.stringify(mealData),
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const response = await fetchWithToken(
  //     mealUrl,
  //     "POST",
  //     fetchConfig.headers,
  //     fetchConfig
  //   );

  //   const newFoodItems = foodItems.map((foodItem) => {
  //     return {
  //       food_name: foodItem.food_name,
  //       brand_name: foodItem.brand_name,
  //       serving_qty: foodItem.serving_qty,
  //       serving_unit: foodItem.serving_unit,
  //       serving_weight_grams: foodItem.serving_weight_grams,
  //       calories: foodItem.nf_calories,
  //       total_fat: foodItem.nf_total_fat,
  //       saturated_fat: foodItem.nf_saturated_fat,
  //       cholesterol: foodItem.nf_cholesterol,
  //       sodium: foodItem.nf_sodium,
  //       total_carbohydrate: foodItem.nf_total_carbohydrate,
  //       dietary_fiber: foodItem.nf_dietary_fiber,
  //       sugars: foodItem.nf_sugars,
  //       protein: foodItem.nf_protein,
  //       potassium: foodItem.nf_potassium,
  //       eaten_id: response.id,
  //     };
  //   });

  //   const foodItemUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/food_items/${response.id}`;
  //   const foodItemFetchConfig = {
  //     method: "POST",
  //     body: JSON.stringify(newFoodItems),
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   await fetchWithToken(
  //     foodItemUrl,
  //     "POST",
  //     foodItemFetchConfig.headers,
  //     foodItemFetchConfig
  //   );
  //   navigateTo("/meal-history");
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
      <div>
        <Nav navVisible={navVisible} toggleNav={toggleNav} />
      </div>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-4 text-center">
          <h1 className="text-center">Log a Meal</h1>
          <form onSubmit={handleSeeNutrients} id="create-appointment-form">
            {saveButton && (
              <div className="form-floating mb-3">
                <input
                  value={name}
                  onChange={handleNameChange}
                  placeholder="name"
                  name="name"
                  required
                  type="text"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="ends">Name</label>
              </div>
            )}
            {saveButton && (
              <div className="form-floating mb-3">
                <input
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="description"
                  name="description"
                  required
                  type="text"
                  id="description"
                  className="form-control"
                />
                <label htmlFor="ends">Description</label>
              </div>
            )}
            {saveButton && (
              <div className="form-floating mb-3">
                <select
                  value={type}
                  onChange={handleTypeChange}
                  placeholder="name"
                  name="name"
                  required
                  type="text"
                  id="name"
                  className="form-control"
                >
                  <option value="">Select a type</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                  <option value="Dessert">Dessert</option>
                </select>
                <label htmlFor="ends">Type of Meal</label>
              </div>
            )}
            {saveButton && (
              <div className="form-floating mb-3">
                <input
                  value={dateTimeEaten}
                  onChange={handleDateTimeEatenChange}
                  placeholder="dateTimeEaten"
                  name="dateTimeEaten"
                  required
                  type="date"
                  id="datetime_eaten"
                  className="form-control"
                />
                <label htmlFor="ends">Date Eaten</label>
              </div>
            )}
            {!showNutrients && (
              <div className="form-floating mb-3">
                <textarea
                  onChange={handleQueryChange}
                  placeholder="Description"
                  required
                  type="text"
                  name="Description"
                  id="Description"
                  className="form-control"
                  value={query}
                />
                <label htmlFor="first_name">What was in your meal...</label>
              </div>
            )}
            {!showNutrients && (
              <button className="btn btn-secondary lookup-button w-100">
                See Nutrients
              </button>
            )}
          </form>
          {showNutrients && (
            <div className="table-container">
              <table className="table table-striped table-bordered table-hover custom-table">
                <thead className="thead-dark">
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
                      <tr
                        key={`${foodItem.food_name}_${index}`}
                        value={foodItem.id}
                      >
                        <td>
                          <img
                            style={{ width: "100px" }}
                            alt="food item"
                            src={
                              foodItem.photo.thumb ||
                              "https://datalabel.com/wp-content/uploads/2022/03/placeholder-image-300x225-1.png"
                            }
                          />
                        </td>
                        <td>
                          {foodItem.serving_qty} {foodItem.serving_unit}
                        </td>
                        <td>{foodItem.food_name}</td>
                        <td>{foodItem.nf_calories}</td>
                        <td>{foodGroups[foodItem.tags.food_group]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {saveButton && (
            <button
              onClick={handleLog}
              className="btn btn-success lookup-button w-100"
            >
              Log Meal
            </button>
          )}
          {showNutrients && !saveButton && (
            <button
              onClick={handleSaveButtonChange}
              className="btn btn-secondary lookup-button w-100"
            >
              Save Meal
            </button>
          )}
          {showNutrients && (
            <button
              onClick={() => window.location.reload()}
              className="btn btn-secondary return-button w-100"
              style={{ marginTop: "10px" }}
            >
              Return to Meal Lookup
            </button>
          )}
        </div>
      </div> */}
      <h1>MEAL FORM</h1>
    </div>
  );
};

export default MealForm;
