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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00"
        }
    }
