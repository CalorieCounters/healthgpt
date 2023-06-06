from pydantic import BaseModel
from typing import List, Optional
import datetime


class FoodItem(BaseModel):
    food_id: Optional[int]
    food_name: str
    brand_name: Optional[str]
    serving_qty: Optional[float]
    serving_unit: str
    serving_weight_grams: Optional[float]
    calories: Optional[float]
    total_fat: Optional[float]
    saturated_fat: Optional[float]
    cholesterol: Optional[float]
    sodium: Optional[float]
    total_carbohydrate: Optional[float]
    dietary_fiber: Optional[float]
    sugars: Optional[float]
    protein: Optional[float]
    potassium: Optional[float]
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
