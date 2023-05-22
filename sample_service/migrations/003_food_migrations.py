steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE eaten_meals (
            eaten_meal_id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(255),
            type VARCHAR(255) NOT NULL,
            datetime_eaten TIMESTAMP,
            datetime_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user_id INT REFERENCES accounts (id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE food_items (
            food_id SERIAL PRIMARY KEY NOT NULL,
            food_name VARCHAR(255) NOT NULL,
            brand_name VARCHAR(255),
            serving_qty FLOAT NOT NULL,
            serving_unit VARCHAR(255) NOT NULL,
            serving_weight_grams FLOAT NOT NULL,
            calories FLOAT NOT NULL,
            total_fat FLOAT NOT NULL,
            saturated_fat FLOAT NOT NULL,
            cholesterol FLOAT NOT NULL,
            sodium FLOAT NOT NULL,
            total_carbohydrate FLOAT NOT NULL,
            dietary_fiber FLOAT NOT NULL,
            sugars FLOAT NOT NULL,
            protein FLOAT NOT NULL,
            potassium FLOAT NOT NULL,
            eaten_id INT REFERENCES eaten_meals (eaten_meal_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """,
    ]
]
