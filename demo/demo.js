import React from "react";
import ReactDOM from "react-dom/client";
import "./demo.css";
import { TOPIC_GROUPS } from "./data.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div>
      <Header groups={TOPIC_GROUPS} />
      <main>
        {TOPIC_GROUPS.map((group) => (
          <section className="topic-group" id={group.id} key={group.id}>
            <h2>{group.title}</h2>
            <div className="topic-grid">
              {group.topics.map((topic) => (
                <article className="topic-card" id={topic.id} key={topic.id}>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);