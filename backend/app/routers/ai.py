from fastapi import APIRouter
from pydantic import BaseModel

from app.langgraph.agent import agent

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(request: ChatRequest):
    result = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": request.message
                }
            ]
        }
    )

    return {
        "response": result["messages"][-1].content
    }