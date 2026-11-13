import React, { useState } from "react";
import TopicExample from "../common/TopicExample";

export default function JavaScriptDemo({ topicId }) {
  const [closureCount, setClosureCount] = useState(0);
  const [message, setMessage] = useState("Click to run the example.");
  const topics = {
    closures: {
      title: "Closures",
      summary: "A closure keeps access to variables from the scope where a function was created.",
      code: `function makeCounter() {
  let count = 0;
  return () => ++count;
}`,
    },
    promises: {
      title: "Promises",
      summary: "A Promise represents the eventual completion or failure of asynchronous work.",
      code: `loadData()
  .then((data) => setData(data))
  .catch((error) => setError(error));`,
    },
    "async-await": {
      title: "Async/await",
      summary: "Async/await lets you write Promise-based work in a sequential style.",
      code: `async function loadData() {
  try {
    const response = await fetch("/api/data");
    return await response.json();
  } catch (error) {
    setError(error.message);
  }
}`,
    },
    "array-methods": {
      title: "Array methods",
      summary: "Methods such as map and filter create useful derived arrays without manually managing indexes.",
      code: `const activeNames = users
  .filter((user) => user.active)
  .map((user) => user.name);`,
    },
  };
  const topic = topics[topicId];

  async function runExample() {
    if (topicId === "closures") {
      setClosureCount((value) => value + 1);
      setMessage("The event handler updates state kept by this component.");
      return;
    }

    if (topicId === "promises" || topicId === "async-await") {
      setMessage("Loading...");
      const result = await Promise.resolve("Async work completed.");
      setMessage(result);
      return;
    }

    const names = ["Ada", "Grace", "Linus"];
    setMessage(names.filter((name) => name.startsWith("G")).join(", "));
  }

  return (
    <TopicExample title={topic.title} summary={topic.summary} code={topic.code}>
      <button type="button" onClick={runExample}>
        Run {topic.title} example
      </button>
      {topicId === "closures" && <p>Counter: {closureCount}</p>}
      <p aria-live="polite">{message}</p>
    </TopicExample>
  );
}
