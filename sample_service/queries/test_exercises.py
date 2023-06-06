from .utils import map_fields_to_array
from fastapi.testclient import TestClient
from authentication import authenticator
from main import app
from models.exercises import Exercise, ExerciseCreateOut
from queries.exercises import ExerciseQueries
from fastapi.encoders import jsonable_encoder

client = TestClient(app)


def test_exercise_map_fields():
    mapped = map_fields_to_array([], [])

    expected_result = []

    assert mapped == expected_result


def fake_get_current_account_data(account: dict):
    account["id"] = 1
    return account


class FakeCreateExercise:
    def create(self, exercises, user_id):
        pass


def test_create_exercise():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    app.dependency_overrides[ExerciseQueries] = FakeCreateExercise

    input = [
        Exercise(name_type="running", duration=30.2, burned_calories=302.25),
        Exercise(name_type="running", duration=30.2, burned_calories=302.25),
    ]
    json_compatible_item_data = jsonable_encoder(input)
    print("JSON ENCODED", json_compatible_item_data)
    response = client.post(
        "/exercise",
        headers={
            "Authorization": "Bearer 123",
        },
        json=json_compatible_item_data,
    )
    print("RESPNSE", response.text)
    assert response.status_code == 200
    assert response.json() == ExerciseCreateOut(message="Success", count=1)


def test_main_exercises():
    response = client.get("/")

    expected = {"message": "Hello World"}

    assert response.status_code == 200
    assert response.json() == expected
