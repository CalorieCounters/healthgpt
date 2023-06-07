from fastapi.testclient import TestClient
from main import app
from authentication import authenticator
from queries.meals import FoodItemQueries

client = TestClient(app)


class EmptyNutrientQuery:
    def get_food_items(self, query: str):
        return [{"name": "Apple", "calories": 52}]


def mock_get_current_account_data(account: dict):
    account["id"] = 123
    return account


def test_get_nutrients():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = mock_get_current_account_data

    app.dependency_overrides[
        FoodItemQueries
    ] = EmptyNutrientQuery

    response = client.post("/natural/nutrients", json={"query": "Apple"})
    print(response)

    assert response.status_code == 200
    data = response.json()
    print(data)

    assert len(data) == 1
    assert data[0]["name"] == "Apple"
    assert data[0]["calories"] == 52
