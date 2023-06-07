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
        DROP TABLE eaten_meals;
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
            serving_weight_grams FLOAT,
            calories FLOAT,
            total_fat FLOAT,
            saturated_fat FLOAT,
            cholesterol FLOAT,
            sodium FLOAT,
            total_carbohydrate FLOAT,
            dietary_fiber FLOAT,
            sugars FLOAT,
            protein FLOAT,
            potassium FLOAT,
            eaten_id INT REFERENCES eaten_meals (eaten_meal_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE food_items;
        """,
    ]
]
