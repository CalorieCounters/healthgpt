from typing import Optional, Union
from db import pool
from models.exercises import Exercise, ExerciseCreateOut, Exercises, HttpError
import os
import requests
from .utils import map_fields_to_array

NUTRITIONIX_URL = os.environ["NUTRITIONIX_URL"]
X_APP_ID = os.environ["X_APP_ID"]
X_APP_KEY = os.environ["X_APP_KEY"]


class ExerciseQueries:
    def get_exercise(self, query):
        url = f"{NUTRITIONIX_URL}/exercise"
        headers = {
            "x-app-id": X_APP_ID,
            "x-app-key": X_APP_KEY,
            "Content-Type": "application/json",
            "x-remote-user-id": "0",
        }
        response = requests.post(url, headers=headers, json=query)
        exercises = response.json()["exercises"]
        return exercises

    def create(
        self, exercises: list[Exercise], user_id: Optional[int]
    ) -> Union[ExerciseCreateOut, HttpError]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    for exercise in exercises:
                        db.execute(
                            """
                            INSERT INTO exercise (
                                name,
                                duration,
                                est_burned_calories,
                                user_id
                            )
                            VALUES (%s, %s, %s, %s)
                            """,
                            [
                                exercise.name_type,
                                exercise.duration,
                                exercise.burned_calories,
                                user_id,
                            ],
                        )
                    return ExerciseCreateOut(
                        message="Success", count=len(exercises)
                    )
        except Exception as error:
            return {"message": str(error)}

    def get_all(self, user_id: Optional[int]) -> Union[Exercises, HttpError]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT * FROM exercise
                        WHERE user_id = %s
                        ORDER BY datetime_created;
                        """,
                        [user_id],
                    )
                    colnames = [desc[0] for desc in db.description]
                    exercises = db.fetchall()
                    response_data = map_fields_to_array(exercises, colnames)
                    return response_data
        except Exception as error:
            return {"message": str(error)}
