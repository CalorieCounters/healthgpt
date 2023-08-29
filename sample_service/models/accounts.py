from typing import Optional
from pydantic import BaseModel

# from jwtdown_fastapi.authentication import Token


class AccountForm(BaseModel):
    username: str
    password: str


class HttpError(BaseModel):
    detail: str


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    uid: str
    first_name: Optional[str]
    last_name: Optional[str]
    email: str
    gender: Optional[str]


class AccountOut(AccountIn):
    pass


# class AccountToken(Token):
#     account: AccountOut
