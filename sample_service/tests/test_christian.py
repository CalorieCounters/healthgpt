from fastapi.testclient import TestClient
from main import app
from queries.meals import MealQueries
from models.meals import MealIn, EatenMeal
from authentication import authenticator
from datetime import date
from fastapi.encoders import jsonable_encoder

client = TestClient(app)


class CreateMealQueries:
    def create(self, meal, user_id):
        result = {
            "id": 1000,
            "user_id": 5
        }
        result.update(meal)
        return result


def fake_get_current_account_data(account: dict):
    account["id"] = 5
    return account


def test_create_meal():
    app.dependency_overrides[MealQueries] = CreateMealQueries
    app.dependency_overrides[
        authenticator.get_current_account_data] = fake_get_current_account_data

    input = MealIn(
        name="Breakfast from Panera",
        description="bagel with cream cheese and a coffee",
        type="breakfast",
        datetime_eaten=date.today(),
        )
    json_compatible_item_data = jsonable_encoder(input)
    expected_output = jsonable_encoder(EatenMeal(
        id=1000,
        name="Breakfast from Panera",
        type="breakfast",
        datetime_eaten=date.today()
        ))
    response = client.post("/api/meals", json=json_compatible_item_data)
    actual_output = response.json()

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert actual_output == expected_output
