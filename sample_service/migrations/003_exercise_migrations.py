steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE exercise (
            exercise_id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(255) NOT NULL,
            duration FLOAT NOT NULL,
            est_burned_calories FLOAT NOT NULL,
            datetime_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user_id INT REFERENCES accounts (id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE eaten_meals;
        """,
    ]
]
