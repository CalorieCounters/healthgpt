from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token
from typing import List, Optional
from db import pool
import datetime


class FoodItem(BaseModel):
    food_id: int
    food_name: str
    brand_name: str
    serving_qty: float
    serving_unit: float
    serving_weight_grams: float
    calories: float
    total_fat: float
    saturated_fat: float
    cholesterol: float
    sodium: float
    total_carbohydrate: float
    dietary_fiber: float
    sugars: float
    protein: float
    potassium: float
    eaten_id: int
    photo: str


class MealIn(BaseModel):
    description: str
    name: Optional[str]
    type: str
    datetime_eaten: Optional[datetime.date]


class MealOut(BaseModel):
    food_items: List[FoodItem]


class EatenMeal(BaseModel):
    id: int
    name: Optional[str]
    type: str
    datetime_eaten: Optional[datetime.date]


class HttpError(BaseModel):
    detail: str


class NutrientQuery(BaseModel):
    query: str
