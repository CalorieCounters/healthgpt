from db import pool
from models.accounts import AccountIn, AccountOut, HttpError


class AccountQueries:
    def create_account(self, account: AccountIn) -> AccountOut:
        try:
            print("ACCCOUNT IN HERE", account)
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO accounts (
                            uid,
                            first_name,
                            last_name,
                            email,
                            gender
                            )
                        VALUES (%s, %s, %s, %s, %s)
                        RETURNING uid;
                        """,
                        [
                            account.uid,
                            account.first_name,
                            account.last_name,
                            account.email,
                            account.gender,
                        ],
                    )
                    uid = result.fetchone()[0]
                    account = AccountOut(
                        uid=uid,
                        first_name=account.first_name,
                        last_name=account.last_name,
                        email=account.email,
                        gender=account.gender,
                    )
                    return account
        except Exception as error:
            return {"detail": str(error)}

    def get_account(self, uid: str) -> AccountOut | None:
        try:
            print("WHAT IS IT", uid)
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT *
                        FROM accounts
                        WHERE uid = %s;
                        """,
                        [uid],
                    )
                    record = result.fetchone()
                    print("GET ACCOUNT", record)
                    if record is None:
                        return None
                    return AccountOut(
                        uid,
                        first_name=record[1],
                        last_name=record[2],
                        email=record[3],
                        gender=record[len(record) - 1],
                    )
        except Exception as error:
            return {"detail": str(error)}
