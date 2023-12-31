from fastapi import Depends, APIRouter
# from authentication import authenticator
from queries.meals import MealQueries, FoodItemQueries
from models.meals import (
    MealIn,
    EatenMeal,
    HttpError,
    FoodItem,
)

router = APIRouter()


@router.post("/api/meals", response_model=EatenMeal | HttpError)
def create_meal(
    meal: MealIn,
    repo: MealQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data),
):
    # user_id = account_data["id"]
    return repo.create(meal)


@router.post("/natural/nutrients", response_model=list | HttpError)
def get_nutrients(
    query: dict,
    repo: FoodItemQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_food_items(query)


@router.post(
    "/api/food_items/{eaten_id}", response_model=list[FoodItem] | HttpError
)
def create_food_items(
    eaten_id: int,
    food_items: list[FoodItem],
    repo: FoodItemQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.create(food_items, eaten_id)


@router.get("/eaten_meals/{show_today}", response_model=list | HttpError)
def get_eaten_meals(
    show_today: bool,
    # account_data: dict = Depends(authenticator.get_current_account_data),
    repo: MealQueries = Depends(),
):
    # user_id = account_data["id"]
    return repo.get_all(show_today)


@router.get("/get_meal_calories/{eaten_id}", response_model=int | HttpError)
def get_meal_calories(
    eaten_id: int,
    repo: FoodItemQueries = Depends(),
):
    return repo.get_calories(eaten_id)
