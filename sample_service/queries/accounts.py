from db import pool
from models.accounts import AccountIn, AccountOut, HttpError


class AccountQueries:
    def create_account(
        self, account: AccountIn, hashed_password: str
    ) -> AccountOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO accounts (
                            first_name,
                            last_name,
                            username,
                            email,
                            hashed_password
                            )
                        VALUES (%s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            account.first_name,
                            account.last_name,
                            account.username,
                            account.email,
                            hashed_password,
                        ],
                    )
                    id = result.fetchone()[0]

                    account = AccountOut(
                        id=id,
                        first_name=account.first_name,
                        last_name=account.last_name,
                        username=account.username,
                        email=account.email,
                        hashed_password=hashed_password,
                    )
                    return account
        except Exception as error:
            return {"detail": str(error)}

    def get_account(self, username: str) -> AccountOut | HttpError:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT *
                        FROM accounts
                        WHERE username = %s;
                        """,
                        [username],
                    )
                    record = result.fetchone()
                    
                    if record is None:
                        return HttpError(message="does not exist")
                    return AccountOut(
                        id=record[0],
                        first_name=record[1],
                        last_name=record[2],
                        username=record[3],
                        email=record[4],
                        hashed_password=record[5],
                    )
        except Exception as error:
            return {"detail": str(error)}
