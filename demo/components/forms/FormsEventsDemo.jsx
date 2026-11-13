import React, { useState } from "react";
import TopicExample from "../common/TopicExample";

export default function FormsEventsDemo({ topicId }) {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const topics = {
    "controlled-components": {
      title: "Controlled components",
      summary: "The input value comes from React state, and onChange updates that state.",
      code: `<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>`,
    },
    "form-validation": {
      title: "Form validation",
      summary: "Validate user input before accepting a submission and show actionable feedback.",
      code: `if (!name.trim()) {
  setError("Enter your name.");
  return;
}`,
    },
    "event-handling": {
      title: "Event handling",
      summary: "Attach a handler to the relevant event and use its value to update the UI.",
      code: `<form onSubmit={handleSubmit}>
  <button type="submit">Save</button>
</form>`,
    },
  };
  const topic = topics[topicId];

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name.trim());
  }

  return (
    <TopicExample title={topic.title} summary={topic.summary} code={topic.code}>
      <form className="practice-form" onSubmit={handleSubmit}>
        <label htmlFor="practice-name">Your name</label>
        <input
          id="practice-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p role="status">Thanks, {submittedName}.</p>}
    </TopicExample>
  );
}
