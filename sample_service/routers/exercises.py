from fastapi import APIRouter, Depends
from authentication import authenticator
from models.exercises import (
    HttpError,
    ExerciseCreateOut,
    Exercise,
)
from queries.exercises import ExerciseQueries


router = APIRouter()


@router.post("/natural/exercises", response_model=list | HttpError)
def get_exercise_data(
    query: dict,
    repo: ExerciseQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_exercise(query)


@router.post("/exercise", response_model=ExerciseCreateOut | HttpError)
def create_exercise(
    exercises: list[Exercise],
    repo: ExerciseQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]
    return repo.create(exercises, user_id)


@router.get("/exercises", response_model=list | HttpError)
def list_exercises(
    repo: ExerciseQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]
    return repo.get_all(user_id)


@router.get("/")
async def main_exercises():
    return {"message": "Hello World"}
