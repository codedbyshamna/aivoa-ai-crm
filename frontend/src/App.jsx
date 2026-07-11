import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    hcp_name: "",
    interaction_type: "",
    interaction_date: "",
    interaction_time: "",
    attendees: "",
    topics_discussed: "",
    materials_shared: "",
    samples_distributed: "",
    sentiment: "",
    outcomes: "",
    follow_up_actions: "",
  });

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveInteraction = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/interactions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      alert("Interaction Saved Successfully!");
      console.log(data);
    } catch (err) {
      alert("Error saving interaction");
      console.error(err);
    }
  };

  const askAI = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await response.json();
      setReply(data.response);
    } catch (err) {
      setReply("Unable to connect to AI.");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>AI First CRM - HCP Interaction</h1>

      <hr />

      <h2>Log Interaction</h2>

      <input
        name="hcp_name"
        placeholder="HCP Name"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="interaction_type"
        placeholder="Interaction Type"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="date"
        name="interaction_date"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="time"
        name="interaction_time"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="attendees"
        placeholder="Attendees"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="topics_discussed"
        placeholder="Topics Discussed"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="materials_shared"
        placeholder="Materials Shared"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="samples_distributed"
        placeholder="Samples Distributed"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="sentiment"
        placeholder="Sentiment"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="outcomes"
        placeholder="Outcome"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="follow_up_actions"
        placeholder="Follow Up Actions"
        onChange={handleChange}
      />
      <br />
      <br />

      <button onClick={saveInteraction}>
        Save Interaction
      </button>

      <hr />

      <h2>AI Chat</h2>

      <input
        style={{ width: "400px" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask the AI..."
      />

      <button onClick={askAI}>
        Send
      </button>

      <h3>AI Response</h3>

      <div
        style={{
          background: "#f2f2f2",
          padding: "15px",
          borderRadius: "8px",
          minHeight: "80px",
        }}
      >
        {reply}
      </div>
    </div>
  );
}

export default App;