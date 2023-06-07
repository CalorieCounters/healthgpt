from fastapi.testclient import TestClient
from main import app
from queries.meals import MealQueries
from authentication import authenticator

client = TestClient(app)


class GetMealQueries:
    def get_all(self, user_id: int, show_today: bool):
        print("in here", show_today)
        result = [[
                2, 'beer', 'Lunch', '2023-06-07T00:00:00',
                '2023-06-07T15:55:42.482762', 1, 224],
                [
                3, 'egg', 'Lunch', '2023-06-07T00:00:00',
                '2023-06-07T15:55:42.482762', 1, 224]]
        return result


def fake_get_account_data():
    return {
        'id': 1,
        'first_name': 'test',
        'last_name': 'test',
        'username': 'test',
        'email': 'tes@test.com',
        'hashed_password': '$2b$12$stH1XrYgQDM5h9nMjWQaoeV0xLsP9OotA5QWrOJargSD17OQ5zpF6',
        'gender': 'Male'}


def test_get_eaten_meals():

    app.dependency_overrides[MealQueries] = GetMealQueries
    app.dependency_overrides[
        authenticator.get_current_account_data] = fake_get_account_data

    response = client.get("/eaten_meals/true")
    print(response.json())
    assert response.status_code == 200
    assert len(response.json()) == 2
