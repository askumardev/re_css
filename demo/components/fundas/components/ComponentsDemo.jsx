import React from "react";
import TopicExample from "../../common/TopicExample";

function SkillTag({ children }) {
  return <span className="skill-tag">{children}</span>;
}

function ProfileCard({ name, role, skills }) {
  return (
    <article className="profile-card">
      <div className="profile-avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <h4>{name}</h4>
      <p className="profile-role">{role}</p>
      <div className="skill-list" aria-label="Skills">
        {skills.map((skill) => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </div>
    </article>
  );
}

export default function ComponentsDemo() {
  return (
    <TopicExample
      title="Reusable components"
      summary="ProfileCard is composed from smaller SkillTag components. Each component owns one clear part of the interface."
      code={`function SkillTag({ children }) {
  return <span>{children}</span>;
}

function ProfileCard({ name, role, skills }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      {skills.map((skill) => (
        <SkillTag key={skill}>{skill}</SkillTag>
      ))}
    </article>
  );
}`}
    >
      <ProfileCard
        name="Alex Morgan"
        role="Frontend Developer"
        skills={["React", "JavaScript", "CSS"]}
      />
    </TopicExample>
  );
}
