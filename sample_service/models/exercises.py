import datetime
from pydantic import BaseModel


class Exercise(BaseModel):
    name_type: str
    duration: float
    burned_calories: float


class ExerciseOut(BaseModel):
    exercise_id: int
    name: str
    duration: float
    est_burned_calories: float
    datetime_created: datetime.date
    user_id: int


class HttpError(BaseModel):
    detail: str


class Exercises(BaseModel):
    exercises: list[ExerciseOut]


class ExerciseCreateOut(BaseModel):
    message: str
    count: int


class ExerciseCreateIn(BaseModel):
    exercises: list[Exercise]
