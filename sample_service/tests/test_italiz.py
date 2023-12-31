from queries.exercises import ExerciseQueries
from queries.utils import map_fields_to_array
from fastapi.testclient import TestClient
# from authentication import authenticator
from main import app

client = TestClient(app)


class CreateExeriseQueries:
    def create(self, exercises, user_id):
        return {"message": "Success", "count": 2}


def fake_get_current_account_data():
    return {"id": 1}


def test_create_exercise():
    app.dependency_overrides[ExerciseQueries] = CreateExeriseQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    input = [
        {
            "name_type": "biking",
            "duration": 30.2,
            "burned_calories": 302.25,
        },
        {
            "name_type": "swimming",
            "duration": 30.2,
            "burned_calories": 302.25,
        },
    ]

    response = client.post(
        "/exercise",
        json=input,
    )
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == {"message": "Success", "count": 2}


def test_create_exercise_missing_field():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    input = [
        {
            "duration": 30.2,
            "burned_calories": 302.25,
        }
    ]

    response = client.post(
        "/exercise",
        json=input,
    )
    app.dependency_overrides = {}
    assert response.status_code == 422
    assert response.json() == {
        "detail": [
            {
                "loc": ["body", 0, "name_type"],
                "msg": "field required",
                "type": "value_error.missing",
            }
        ]
    }


def test_exercise_map_fields():
    mapped = map_fields_to_array(
        [["running", 30, 300]], ["name_type", "duration", "burned_calories"]
    )

    expected_result = [
        {"name_type": "running", "duration": 30, "burned_calories": 300}
    ]

    assert mapped == expected_result
