import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function TaskCard({ title, description }) {
  const [priority, setPriority] = useState("LOW");

  const isUrgent = priority === "URGENT";

  return (
    <div className={`task-card ${isUrgent ? "urgent" : ""}`}>
      <div className="task-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <label className="priority-label">
        Priority
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="URGENT">URGENT</option>
        </select>
      </label>
    </div>
  );
}

function App() {
  return (
    <main className="app">
      <div className="header">
        <span className="badge">SAC-7 EXTRA CHALLENGE</span>
        <h1>Task Priority Board</h1>
        <p>Select a priority. URGENT tasks automatically turn red.</p>
      </div>

      <section className="tasks">
        <TaskCard
          title="Complete Assignment"
          description="Finish the SAC-7 extra challenge and submit the repository."
        />
        <TaskCard
          title="Prepare Presentation"
          description="Review the project requirements before the session."
        />
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
