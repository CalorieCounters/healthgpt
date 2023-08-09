from typing import Optional
from db import pool
from models.accounts import AccountIn, AccountOut, HttpError


class AccountQueries:
    def create_account(
        self, account: AccountIn, hashed_password: Optional[str] = ""
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
                            hashed_password,
                            gender
                            )
                        VALUES (%s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            account.first_name,
                            account.last_name,
                            account.username,
                            account.email,
                            account.password,
                            account.gender,
                        ],
                    )
                    id = result.fetchone()[0]
                    account = AccountOut(
                        id=id,
                        first_name=account.first_name,
                        last_name=account.last_name,
                        username=account.username,
                        email=account.email,
                        password=account.password,
                        gender=account.gender,
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
                        gender=record[len(record) - 1],
                    )
        except Exception as error:
            return {"detail": str(error)}
