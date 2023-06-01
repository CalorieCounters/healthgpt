from db import pool
from typing import Union
from models.meals import EatenMeal, MealIn, FoodItem, HttpError
import os
import json
import requests
from models.meals import FoodItem
from keys import X_APP_ID, X_APP_KEY

APP_ID = os.environ.get("X_APP_ID", X_APP_ID)
APP_KEY = os.environ.get("X_APP_KEY", X_APP_KEY)

class MealQueries:

    def create(self, meal: MealIn, user_id:int) -> EatenMeal:
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
                        [
                            meal.name,
                            meal.type,
                            meal.datetime_eaten,
                            user_id
                        ],
                    )
                    id = db.fetchone()[0]
                    meal = EatenMeal(
                        id=id,
                        name=meal.name,
                        type=meal.type,
                        datetime_eaten=meal.datetime_eaten,
                        user_id=user_id
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
#     def create(self, food_item: , user_id:int) -> FoodItem:

    def get_food_items(self, query):
        url = "https://trackapi.nutritionix.com/v2/natural/nutrients"
        headers = {"x-app-id": APP_ID, "x-app-key": APP_KEY, "Content-Type": "application/json", "x-remote-user-id": "0" }
        response = requests.post(url, headers=headers, json=query)
        print(response.status_code)
        food_items = response.json()['foods']
        return food_items
