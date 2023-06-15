from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authentication import authenticator
from routers import accounts, meals, exercises

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(meals.router)
app.include_router(exercises.router)

origins = [
    "http://localhost:3000",
    # "https://healthgpt-production.up.railway.app",
    # "https://healthgpt-frontend-production.up.railway.app",
    # "https://caloriecounters.gitlab.io",
    # "https://christiantegene.gitlab.io",
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}
