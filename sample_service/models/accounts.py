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
    first_name: str
    last_name: str
    username: str
    email: str
    password: str
    gender: str


class AccountOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    username: str
    email: str
    password: str
    gender: str


# class AccountToken(Token):
#     account: AccountOut
