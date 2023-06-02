from fastapi import Depends, APIRouter

# from authentication import authenticator
from queries.meals import MealQueries, FoodItemQueries
from models.meals import (
    MealIn,
    EatenMeal,
    HttpError,
    # FoodItemsIn,
    FoodItem,
)
from authentication import authenticator

router = APIRouter()


@router.post("/api/meals", response_model=EatenMeal | HttpError)
def create_meal(
    meal: MealIn,
    repo: MealQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    print("INSIDE CREATE A MEAL")
    user_id = account_data["id"]
    print("TJHIS IS USER ID", user_id)
    return repo.create(meal, user_id)


@router.post("/natural/nutrients", response_model=list | HttpError)
def get_nutrients(
    query: dict,
    repo: FoodItemQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    print("ACCOUNTS", account_data)
    return repo.get_food_items(query)


# Create food_item emdpoint but must take in eaten_id, list of new foods
@router.post(
    "/api/food_items/{eaten_id}", response_model=list[FoodItem] | HttpError
)
def create_food_items(
    eaten_id: int,
    food_items: list[FoodItem],
    repo: FoodItemQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    print("CREATE FOOD ITMES", account_data)
    return repo.create(food_items, eaten_id)
