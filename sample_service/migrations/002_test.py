steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            First_name VARCHAR(255) NOT NULL,
            Last_name VARCHAR(255) NOT NULL,
            Username VARCHAR(255) UNIQUE NOT NULL,
            Email VARCHAR(255) UNIQUE NOT NULL,
            Password VARCHAR(255) NOT NULL,
            Created_date date default current_date NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """,
    ],
]
