steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE accounts (
            uid VARCHAR(255) PRIMARY KEY NOT NULL,
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
            created_date DATE DEFAULT current_date NOT NULL,
            gender VARCHAR(255)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """,
    ],
]
