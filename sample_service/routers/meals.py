from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from authentication import authenticator
from queries.meals import MealQueries, FoodItemQueries
from models.meals import MealIn, EatenMeal, HttpError


router = APIRouter()


@router.post("/api/meals", response_model=EatenMeal | HttpError)
def create_meal(
    meal: MealIn,
    response: Response,
    repo: MealQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):

    user_id = account_data['id']
    return repo.create(meal, user_id)


@router.post("/natural/nutrients", response_model=list | HttpError)
def get_nutrients(
    query: dict,
    response: Response,
    repo: FoodItemQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data)
):
    return repo.get_food_items(query)
