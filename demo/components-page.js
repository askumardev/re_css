import React from "react";
import ReactDOM from "react-dom/client";
import "./demo.css";
import { TOPIC_GROUPS } from "./data.js";
import Header from "./components/Header.js";

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

function ComponentsPage() {
  return (
    <div>
      <Header groups={TOPIC_GROUPS} homeHref="index.html" />
      <main className="component-page">
        <a className="back-link" href="index.html#react-fundamentals">
          &larr; Back to React Fundamentals
        </a>
        <h2>React Components</h2>
        <p className="component-intro">
          Components are reusable pieces of UI. This example composes a profile
          card from smaller components and passes data between them with props.
        </p>

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
              <code>
                {`function SkillTag({ label }) {
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
                }`}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentsPage />);
