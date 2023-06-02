from pydantic import BaseModel
from typing import List, Optional
import datetime


class FoodItem(BaseModel):
    food_id: Optional[int]
    food_name: str
    brand_name: Optional[str]
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
