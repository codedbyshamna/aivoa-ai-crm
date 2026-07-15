# AI-First CRM – HCP Interaction Module

An AI-powered Customer Relationship Management (CRM) application designed for Healthcare Professionals (HCPs). This project enables medical representatives to log doctor interactions through a structured form and an AI-powered conversational interface built using LangGraph and Groq.

---

## 🚀 Features

- 📝 Log HCP interactions using a structured form
- 🤖 AI Chat Assistant powered by LangGraph
- ✏️ Edit logged interactions
- 📋 View all interactions
- 📄 Summarize interaction notes
- 📅 Generate AI-powered follow-up recommendations
- ⚡ FastAPI REST APIs
- 💻 Modern React frontend

---

# 🛠 Tech Stack

## Frontend
- React
- Vite
- Redux
- JavaScript
- CSS
- Google Inter Font

## Backend
- Python
- FastAPI
- LangGraph
- LangChain
- Groq API (Llama 3.1 8B Instant)
- SQLAlchemy
- SQLite

---

# 📁 Project Structure

```
aivoa-ai-crm/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   ├── models/
│   │   ├── database/
│   │   ├── langgraph/
│   │   │   ├── agent.py
│   │   │   └── tools.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

# 🤖 LangGraph AI Agent

This application uses a LangGraph ReAct Agent integrated with the Groq LLM.

The AI agent analyzes user requests and automatically selects the appropriate tool to perform CRM-related tasks.

---

# 🔧 LangGraph Tools

### 1. Log Interaction

Logs a new Healthcare Professional interaction.

Example:

```
Log an interaction with Dr. Rajesh Kumar.
```

---

### 2. Edit Interaction

Updates an existing interaction.

Example:

```
Update the follow-up date to next Monday.
```

---

### 3. Get Interactions

Displays all logged HCP interactions.

Example:

```
Show all interactions.
```

---

### 4. Summarize Interactions

Generates a concise summary of interaction notes.

Example:

```
Summarize today's interaction.
```

---

### 5. Recommend Follow-up

Suggests the next follow-up action.

Example:

```
Recommend a follow-up for Dr. Rajesh Kumar.
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/codedbyshamna/aivoa-ai-crm.git

cd aivoa-ai-crm
```

---

# Backend Setup

Create and activate a virtual environment:

```bash
cd backend

python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside the backend folder:

```
GROQ_API_KEY=your_groq_api_key
```

Run the backend:

```bash
uvicorn app.main:app --reload
```

Backend URL:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

# API Endpoints

## Interaction APIs

| Method | Endpoint |
|---------|----------|
| GET | `/interactions/` |
| POST | `/interactions/` |
| PUT | `/interactions/{interaction_id}` |
| DELETE | `/interactions/{interaction_id}` |

---

## AI Chat API

### Endpoint

```
POST /ai/chat
```

Example Request

```json
{
  "message": "Summarize today's interaction"
}
```

Example Response

```json
{
  "response": "Today's interaction focused on CardioPlus tablets. The doctor showed positive interest and agreed to prescribe the product for suitable patients."
}
```

---

# Sample Workflow

1. Launch the React application.
2. Fill in the HCP interaction form.
3. Save the interaction.
4. Open the AI Chat section.
5. Ask questions such as:
   - Show all interactions
   - Summarize today's interaction
   - Recommend a follow-up
   - Edit the interaction
   - Log a new interaction

---

# Future Enhancements

- MySQL/PostgreSQL support
- User Authentication
- Role-Based Access Control
- AI-powered analytics dashboard
- Voice-to-Text interaction logging
- Email and calendar integration

---

# Author

**Shamna**

GitHub: https://github.com/codedbyshamna

Project Repository: https://github.com/codedbyshamna/aivoa-ai-crm

---

# Assignment Information

This project was developed as part of the **AIVOA AI-First CRM HCP Interaction Module Technical Assignment**.

The solution demonstrates:
- React frontend
- FastAPI backend
- LangGraph AI Agent
- Groq LLM integration
- AI-assisted CRM workflow
- Five LangGraph tools for HCP interaction management
