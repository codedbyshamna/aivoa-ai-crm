import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()

llm = ChatGroq(
    api_key=os.getenv("GROQ_API_KEY"),
    model="gemma2-9b-it",
    temperature=0
)

def ask_ai(message: str):
    response = llm.invoke(message)
    return response.content