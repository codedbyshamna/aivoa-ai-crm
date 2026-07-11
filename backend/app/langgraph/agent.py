import os
from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langgraph.prebuilt import create_react_agent

from app.langgraph.tools import (
    log_interaction,
    edit_interaction,
    get_interactions,
    summarize_interactions,
    recommend_followup,
)

load_dotenv()

llm = ChatGroq(
    api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile",
    temperature=0,
)


tools = [
    log_interaction,
    edit_interaction,
    get_interactions,
    summarize_interactions,
    recommend_followup,
]

agent = create_react_agent(
    model=llm,
    tools=tools,
)