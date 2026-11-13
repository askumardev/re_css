import React from "react";
import ReactDOM from "react-dom/client";
import "./demo.css";
import { TOPIC_GROUPS } from "./data.js";
import Header from "./components/Header.js";

const requestedTopicId =
  new URLSearchParams(window.location.search).get("topic") || "components";
const selectedGroup = TOPIC_GROUPS.find((group) =>
  group.topics.some((topic) => topic.id === requestedTopicId)
);
const selectedTopic = selectedGroup?.topics.find(
  (topic) => topic.id === requestedTopicId
);

if (selectedTopic) {
  document.title = `${selectedTopic.title} | React Preparation`;
}

function SkillTag({ label }) {
  return <span className="skill-tag">{label}</span>;
}

function SkillList({ skills }) {
  return (
    <div className="skill-list" aria-label="Skills">
      {skills.map((skill) => (
        <SkillTag key={skill} label={skill} />
      ))}
    </div>
  );
}

function ProfileCard({ name, role, skills }) {
  return (
    <article className="profile-card">
      <div className="profile-avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <h3>{name}</h3>
      <p className="profile-role">{role}</p>
      <SkillList skills={skills} />
    </article>
  );
}

function ComponentsExample() {
  return (
    <section className="component-example" aria-labelledby="example-title">
      <div>
        <h3 id="example-title">Rendered example</h3>
        <ProfileCard
          name="Alex Morgan"
          role="Frontend Developer"
          skills={["React", "JavaScript", "CSS"]}
        />
      </div>
      <div>
        <h3>Component code</h3>
        <pre>
          <code>{`function SkillTag({ label }) {
  return <span>{label}</span>;
}

function SkillList({ skills }) {
  return skills.map((skill) => (
    <SkillTag key={skill} label={skill} />
  ));
}

function ProfileCard({ name, role, skills }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <SkillList skills={skills} />
    </article>
  );
}`}</code>
        </pre>
      </div>
    </section>
  );
}

function TopicPage() {
  return (
    <div>
      <Header groups={TOPIC_GROUPS} homeHref="index.html" />
      <main className="component-page">
        <a className="back-link" href="index.html">
          &larr; Back to all topics
        </a>
        {selectedTopic ? (
          <>
            <p className="topic-category">{selectedGroup.title}</p>
            <h2>{selectedTopic.title}</h2>
            <p className="component-intro">{selectedTopic.description}</p>
            {selectedTopic.id === "components" ? (
              <ComponentsExample />
            ) : (
              <article className="study-card">
                <h3>Preparation focus</h3>
                <p>
                  Be ready to explain {selectedTopic.title}, describe when it is
                  useful, and show how it applies in a small React example.
                </p>
              </article>
            )}
          </>
        ) : (
          <section className="study-card" aria-live="polite">
            <h2>Topic not found</h2>
            <p>
              Choose a topic from the navigation menu to open its preparation
              page.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TopicPage />);
