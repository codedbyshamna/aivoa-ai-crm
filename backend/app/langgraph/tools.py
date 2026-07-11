from langchain_core.tools import tool

@tool
def log_interaction(data: str) -> str:
    """Log a new HCP interaction."""
    return f"✅ Interaction logged successfully.\n\n{data}"

@tool
def edit_interaction(data: str) ->str:
    """Edit interaction."""
    return f"✅ Interaction updated.\n\n{data}"

@tool
def get_interactions() -> str:
    """Return all interactions."""
    return "Fetched all interactions."

@tool
def summarize_interactions(text:str)->str:
    """Summarize notes."""
    return f"Summary:\n{text}"

@tool
def recommend_followup(text:str)->str:
    """Suggest follow up."""
    return "Recommended follow-up: Schedule another visit within 7 days."