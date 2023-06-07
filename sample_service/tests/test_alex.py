from fastapi.testclient import TestClient
from main import app
from queries.meals import FoodItemQueries


client = TestClient(app)


class EmptyCalorieQuery:
    def get_calories(self, eaten_id: int):
        return 123


def test_get_calories():

    app.dependency_overrides[
        FoodItemQueries
        ] = EmptyCalorieQuery

    response = client.get("/get_meal_calories/1")

    assert response.status_code == 200
    assert response.json() == 123
