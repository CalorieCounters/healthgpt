from db import pool
from typing import Union
from models.accounts import (
    AccountIn,
    AccountOut,
    HttpError,
    DuplicateAccountError,
)


# class Error(BaseModel):
#     message: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str
    #todo: fix always send password to the corect way


class AccountQueries:
    def create_account(self, account: AccountIn, hashed_password: str) -> AccountOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
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
                            hashed_password
                        ],
                    )
                    id = db.fetchone()[0]

                    acc = AccountOut(
                        id=id,
                        first_name=account.first_name,
                        last_name=account.last_name,
                        username=account.username,
                        email=account.email,
                        hashed_password=hashed_password,
                    )
                    return acc

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
                        return HttpError(message="does not exist") #todo: not giving error, will fix later
                    return AccountOut(
                        id=record[0],
                        first_name=record[1],
                        last_name=record[2],
                        username=record[3],
                        email=record[4],
                        hashed_password=record[5],
                    )
        except Exception as error:
            print("hehehe", error)
            return {"detail": str(error)}



    # def update_account(self, account_id, account: AccountIn) -> AccountOut:
    #     with pool.connection() as conn:
    #         with conn.cursor() as cur:
