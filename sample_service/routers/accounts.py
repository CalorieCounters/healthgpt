from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)

# from authentication import authenticator
from queries.accounts import AccountQueries
from models.accounts import (
    AccountIn,
    AccountOut,
    DuplicateAccountError,
    # AccountToken,
    AccountForm,
    HttpError,
)

router = APIRouter()


# @router.get("/token", response_model=AccountToken | None)
# async def get_token(
#     request: Request,
#     account: AccountIn = Depends(authenticator.try_get_current_account_data),
# ) -> AccountToken | None:
#     if account and authenticator.cookie_name in request.cookies:
#         return {
#             "access_token": request.cookies[authenticator.cookie_name],
#             "type": "Bearer",
#             "account": account,
#         }


@router.get("/api/accounts/{username}", response_model=AccountOut | HttpError)
async def get_account(
    username: str,
    response: Response,
    queries: AccountQueries = Depends(),
):
    record = queries.get_account(username)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/accounts", response_model=AccountOut | HttpError)
async def create_account(
    info: AccountIn,
    # request: Request,
    # response: Response,
    repo: AccountQueries = Depends(),
):
    # hashed_password = authenticator.hash_password(info.password)
    try:
        print("INFRO", info)
        account = repo.create_account(info)
        # form = AccountForm(username=info.username, password=info.password)
        # token = await authenticator.login(response, request, form, repo)
        return account
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
