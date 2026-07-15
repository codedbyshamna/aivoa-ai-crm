# AI-First CRM – HCP Interaction Module

An AI-powered Customer Relationship Management (CRM) module for Healthcare Professionals (HCPs). This project allows medical representatives to log doctor interactions using a structured form and an AI-powered chat interface built with LangGraph and Groq.

---

## 🚀 Features

- Log HCP interactions using a structured form
- AI Chat Assistant powered by LangGraph
- FastAPI backend with REST APIs
- React frontend with responsive UI
- LangGraph ReAct Agent
- Groq LLM Integration
- CRUD APIs for HCP interactions
- AI-powered interaction summarization
- AI follow-up recommendations

---

# 🛠 Tech Stack

### Frontend
- React
- Vite
- Redux
- JavaScript
- CSS
- Google Inter Font

### Backend
- Python
- FastAPI
- LangGraph
- LangChain
- Groq API
- SQLAlchemy
- SQLite (can be replaced with MySQL/PostgreSQL)

---

# 📂 Project Structure

```
aivoa-ai-crm
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── app
│   │   ├── routers
│   │   ├── models
│   │   ├── database
│   │   ├── langgraph
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

This project uses a LangGraph ReAct Agent connected to the Groq LLM.

The AI agent understands user requests and automatically selects the appropriate tool to execute.

---

# 🔧 LangGraph Tools

## 1. Log Interaction

Logs a new Healthcare Professional interaction.

Example:

```
Log an interaction with Dr. Rajesh Kumar.
```

---

## 2. Edit Interaction

Updates an existing interaction.

Example

```
Change the follow-up date to next Monday.
```

---

## 3. Get Interactions

Displays all logged interactions.

Example

```
Show all interactions.
```

---

## 4. Summarize Interactions

Generates a concise summary of interaction notes.

Example

```
Summarize today's interaction.
```

---

## 5. Recommend Follow-up

Suggests the next follow-up action.

Example

```
Recommend the next follow-up.
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/codedbyshamna/aivoa-ai-crm.git

cd aivoa-ai-crm
```

---

# Backend Setup

```bash
cd backend

python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```
GROQ_API_KEY=your_groq_api_key
```

Run backend

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger API

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

Frontend runs on

```
http://localhost:5173
```

---

# API Endpoints

## Interaction APIs

| Method | Endpoint |
|----------|---------------------------|
| GET | /interactions |
| POST | /interactions |
| PUT | /interactions/{id} |
| DELETE | /interactions/{id} |

---

## AI Chat

```
POST /ai/chat
```

Example

```json
{
    "message":"Summarize today's interaction"
}
```

---

# Sample Workflow

1. Open the React application.

2. Fill in the HCP interaction form.

3. Save the interaction.

4. Open AI Chat.

5. Ask questions like:

```
Show all interactions

Summarize today's interaction

Recommend next follow-up

Edit interaction

Log a new interaction
```

---

# Future Improvements

- PostgreSQL/MySQL Integration
- Authentication & Authorization
- Real-time Notifications
- Dashboard Analytics
- AI-powered Meeting Insights
- Voice-to-Text Interaction Logging

---

# Author

**Shamna**

GitHub:

https://github.com/codedbyshamna

Repository:

https://github.com/codedbyshamna/aivoa-ai-crm

---

# Assignment

This project was developed as part of the **AIVOA AI CRM HCP Interaction Module Technical Assignment**, demonstrating an AI-first CRM system using React, FastAPI, LangGraph, and Groq LLM.
