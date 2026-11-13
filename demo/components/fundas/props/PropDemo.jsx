import React from "react";
import TopicExample from "../../common/TopicExample";

function WelcomeCard({ name, role }) {
  return (
    <article className="profile-card">
      <div className="profile-avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <h4>Welcome, {name}</h4>
      <p className="profile-role">{role}</p>
    </article>
  );
}

export default function PropDemo() {
  return (
    <TopicExample
      title="Passing props"
      summary="The parent supplies name and role. WelcomeCard receives them as read-only props and renders different content from the same component."
      code={`function WelcomeCard({ name, role }) {
  return (
    <article>
      <h2>Welcome, {name}</h2>
      <p>{role}</p>
    </article>
  );
}

<WelcomeCard name="Mina" role="Frontend Developer" />`}
    >
      <div className="topic-grid">
        <WelcomeCard name="Mina" role="Frontend Developer" />
        <WelcomeCard name="Sam" role="React Learner" />
      </div>
    </TopicExample>
  );
}