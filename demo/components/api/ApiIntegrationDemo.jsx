import React, { useState } from "react";
import TopicExample from "../common/TopicExample";

const mockUsers = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
];

export default function ApiIntegrationDemo({ topicId }) {
  const [status, setStatus] = useState("idle");
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const topics = {
    fetch: {
      title: "Fetch",
      summary: "Fetch returns a Promise. Check response.ok because HTTP errors do not reject the Promise automatically.",
      code: `const response = await fetch("/api/users");
if (!response.ok) throw new Error("Request failed");
const users = await response.json();`,
    },
    axios: {
      title: "Axios",
      summary: "Axios resolves with response data and rejects non-success HTTP responses.",
      code: `try {
  const response = await axios.get("/api/users");
  setUsers(response.data);
} catch (error) {
  setError(error.message);
}`,
    },
    "rest-apis": {
      title: "REST APIs",
      summary: "REST APIs commonly use HTTP methods to read and update resources.",
      code: `GET    /api/users
POST   /api/users
PATCH  /api/users/1
DELETE /api/users/1`,
    },
    "api-error-handling": {
      title: "API error handling",
      summary: "Represent loading, success, and error states so the user can understand each request outcome.",
      code: `try {
  setStatus("loading");
  const data = await loadUsers();
  setUsers(data);
  setStatus("success");
} catch (error) {
  setStatus("error");
}`,
    },
  };
  const topic = topics[topicId];

  async function loadUsers() {
    setStatus("loading");
    const result = await Promise.resolve(mockUsers);
    setUsers(result);
    setStatus("success");
    setErrorMessage("");
  }

  function simulateRequestError() {
    setStatus("error");
    setErrorMessage("The sample request failed. Check the URL and try again.");
  }

  return (
    <TopicExample title={topic.title} summary={topic.summary} code={topic.code}>
      <button type="button" onClick={loadUsers} disabled={status === "loading"}>
        {status === "loading" ? "Loading..." : "Load sample users"}
      </button>
      {topicId === "api-error-handling" && (
        <button type="button" onClick={simulateRequestError}>
          Simulate request error
        </button>
      )}
      {status === "error" && <p role="alert">{errorMessage}</p>}
      {status === "success" && (
        <ul aria-live="polite">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </TopicExample>
  );
}
