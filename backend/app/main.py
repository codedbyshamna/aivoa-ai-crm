from fastapi import FastAPI
from app.database import engine, Base
from app.routers.interaction import router as interaction_router
from app.routers.ai import router as ai_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="AIVOA AI CRM API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(interaction_router)
app.include_router(ai_router)

print(">>> AI router loaded:", ai_router.routes)

@app.get("/")
def home():
    return {"message": "AIVOA AI CRM Backend Running"}

@app.get("/health")
def health():
    return {"status": "Connected"}