from fastapi.testclient import TestClient
from main import app
from queries.meals import MealQueries
from models.meals import MealIn, EatenMeal
from authentication import authenticator
from datetime import date
import json
from fastapi.encoders import jsonable_encoder

client = TestClient(app)


class CreateMealQueries:
    def create(self, meal, user_id):
        result = {
            "id": 1000,
            "user_id": 5
        }
        result.update(meal)
        print('1234', meal)
        return result


def fake_get_current_account_data(account: dict):
    account["id"] = 5
    return account


# Test Create Meal
def test_create_meal():
    # Arrange
    app.dependency_overrides[MealQueries] = CreateMealQueries
    app.dependency_overrides[
        authenticator.get_current_account_data] = fake_get_current_account_data

    print('12341234', date.today())
    input = MealIn(
        name="Breakfast from Panera",
        description="bagel with cream cheese and a coffee",
        type="breakfast",
        datetime_eaten=date.today(),
        )
    dump = json.dumps(input.dict(), indent=4, sort_keys=True, default=str)
    json_compatible_item_data = jsonable_encoder(input)
    print('here is dump', dump)
    expected_output = jsonable_encoder(EatenMeal(
        id=1000,
        name="Breakfast from Panera",
        type="breakfast",
        datetime_eaten=date.today()
        ))

    # Act
    response = client.post("/api/meals", json=json_compatible_item_data)
    actual_output = response.json()

    # Cleanup
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert actual_output == expected_output
