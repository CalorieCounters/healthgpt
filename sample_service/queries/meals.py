from db import pool
from models.meals import EatenMeal, MealIn, FoodItem, HttpError
import os
import requests
from models.meals import FoodItem
from keys import X_APP_ID, X_APP_KEY


APP_ID = os.environ.get("X_APP_ID", X_APP_ID)
APP_KEY = os.environ.get("X_APP_KEY", X_APP_KEY)


def map_fields_to_array(items, cols):
    response_data = []
    for item in items:
        data = {}
        for i, col in enumerate(cols):
            data[col] = item[i]

        response_data.append(data)

    return response_data


class MealQueries:
    def create(self, meal: MealIn, user_id: int) -> EatenMeal:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        INSERT INTO eaten_meals (
                            name,
                            type,
                            datetime_eaten,
                            user_id
                        )
                        VALUES (%s, %s, %s, %s)
                        RETURNING eaten_meal_id;
                        """,
                        [meal.name, meal.type, meal.datetime_eaten, user_id],
                    )
                    id = db.fetchone()[0]
                    meal = EatenMeal(
                        id=id,
                        name=meal.name,
                        type=meal.type,
                        datetime_eaten=meal.datetime_eaten,
                        user_id=user_id,
                    )
                    return meal
        except Exception as error:
            return {"detail": str(error)}

    def get_one(self, id: int) -> EatenMeal | HttpError:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT *
                        FROM meals
                        WHERE id = %s;
                        """,
                        [id],
                    )
                    record = db.fetchone()
                    if record is None:
                        return HttpError(message="does not exist")
                    return EatenMeal(
                        id=record[0],
                        name=record[1],
                        type=record[2],
                        datetime_eaten=record[3],
                        datetime_created=record[4],
                        user_id=record[5],
                    )
        except Exception as error:
            return {"detail": str(error)}


class FoodItemQueries:
    def create(self, food_items: list[FoodItem], eaten_id: int) -> list[FoodItem]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    for food_item in food_items:
                        db.execute(
                            """
                            INSERT INTO food_items (
                                food_name,
                                brand_name,
                                serving_qty,
                                serving_unit,
                                serving_weight_grams,
                                calories,
                                total_fat,
                                saturated_fat,
                                cholesterol,
                                sodium,
                                total_carbohydrate,
                                dietary_fiber,
                                sugars,
                                protein,
                                potassium,
                                eaten_id
                            )
                            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                            """,
                            [
                                food_item.food_name,
                                food_item.brand_name,
                                food_item.serving_qty,
                                food_item.serving_unit,
                                food_item.serving_weight_grams,
                                food_item.calories,
                                food_item.total_fat,
                                food_item.saturated_fat,
                                food_item.cholesterol,
                                food_item.sodium,
                                food_item.total_carbohydrate,
                                food_item.dietary_fiber,
                                food_item.sugars,
                                food_item.protein,
                                food_item.potassium,
                                eaten_id,
                            ],
                        )
                    # commit these changes to the DB before we can run another db.execute
                    conn.commit()
                    # select all the food_items that were just inserted and return as a response
                    db.execute(
                        """
                        SELECT * FROM food_items WHERE eaten_id = %s;
                        """,
                        [eaten_id],
                    )
                    colnames = [desc[0] for desc in db.description]
                    food_items = (
                        db.fetchall()
                    )  # this fetches from the current db.execute
                    response_data = map_fields_to_array(food_items, colnames)
                    
                    return response_data
        except Exception as error:
            return {"detail": str(error)}

    def get_food_items(self, query):
        url = "https://trackapi.nutritionix.com/v2/natural/nutrients"
        headers = {
            "x-app-id": APP_ID,
            "x-app-key": APP_KEY,
            "Content-Type": "application/json",
            "x-remote-user-id": "0",
        }
        response = requests.post(url, headers=headers, json=query)
        food_items = response.json()["foods"]
        return food_items
