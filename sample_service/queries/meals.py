from db import pool
from models.meals import EatenMeal, MealIn, FoodItem, HttpError
import os
import requests
from .utils import map_fields_to_array

NUTRITIONIX_URL = os.environ["NUTRITIONIX_URL"]
X_APP_ID = os.environ["X_APP_ID"]
X_APP_KEY = os.environ["X_APP_KEY"]


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

    def get_all(self, user_id: int, show_today: bool) -> list | HttpError:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    if show_today:
                        db.execute(
                            """
                            SELECT *
                            FROM eaten_meals
                            WHERE user_id = %s
                            AND (DATE(datetime_created) >= CURRENT_DATE
                            AND DATE(datetime_created)
                            < CURRENT_DATE + INTERVAL '1 DAY')
                            """,
                            [user_id],
                        )
                        eaten_meals = db.fetchall()

                        if eaten_meals is None:
                            return HttpError(
                                message="You have no logged meals"
                            )
                        return eaten_meals
                    else:
                        db.execute(
                            """
                        SELECT *
                        FROM eaten_meals
                        WHERE user_id = %s;
                        """,
                            [user_id],
                        )
                    eaten_meals = db.fetchall()
                    if eaten_meals is None:
                        return HttpError(message="You have no logged meals")
                    return eaten_meals
        except Exception as error:
            return {"detail": str(error)}


class FoodItemQueries:
    def create(
        self, food_items: list[FoodItem], eaten_id: int
    ) -> list[FoodItem]:
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
                            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
                            %s, %s, %s, %s, %s, %s)
                            """,
                            [
                                food_item.food_name,
                                food_item.brand_name,
                                food_item.serving_qty
                                if food_item.serving_qty is not None
                                else 0,
                                food_item.serving_unit,
                                food_item.serving_weight_grams
                                if food_item.serving_weight_grams is not None
                                else 0,
                                food_item.calories
                                if food_item.calories is not None
                                else 0,
                                food_item.total_fat
                                if food_item.total_fat is not None
                                else 0,
                                food_item.saturated_fat
                                if food_item.saturated_fat is not None
                                else 0,
                                food_item.cholesterol
                                if food_item.cholesterol is not None
                                else 0,
                                food_item.sodium
                                if food_item.sodium is not None
                                else 0,
                                food_item.total_carbohydrate
                                if food_item.total_carbohydrate is not None
                                else 0,
                                food_item.dietary_fiber
                                if food_item.dietary_fiber is not None
                                else 0,
                                food_item.sugars
                                if food_item.sugars is not None
                                else 0,
                                food_item.protein
                                if food_item.protein is not None
                                else 0,
                                food_item.potassium
                                if food_item.potassium is not None
                                else 0,
                                eaten_id,
                            ],
                        )
                    conn.commit()
                    db.execute(
                        """
                        SELECT * FROM food_items WHERE eaten_id = %s;
                        """,
                        [eaten_id],
                    )
                    colnames = [desc[0] for desc in db.description]
                    food_items = (
                        db.fetchall()
                    )
                    response_data = map_fields_to_array(food_items, colnames)

                    return response_data
        except Exception as error:
            return {"detail": str(error)}

    def get_food_items(self, query):
        url = f"{NUTRITIONIX_URL}/nutrients"
        headers = {
            "x-app-id": X_APP_ID,
            "x-app-key": X_APP_KEY,
            "Content-Type": "application/json",
            "x-remote-user-id": "0",
        }
        response = requests.post(url, headers=headers, json=query)
        food_items = response.json()["foods"]
        return food_items

    def get_calories(self, eaten_id: int) -> int | HttpError:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT *
                        FROM food_items
                        WHERE eaten_id = %s;
                        """,
                        [eaten_id],
                    )
                    food_items = db.fetchall()
                    if food_items is None:
                        return HttpError(message="You have no logged meals")
                    else:
                        meal_calories = 0
                        for food_item in food_items:
                            meal_calories += food_item[6]
                    return meal_calories
        except Exception as error:
            return {"detail": str(error)}
