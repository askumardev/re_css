import React from "react";

export default function TopicExample({ title, summary, children, code }) {
  return (
    <section className="study-card">
      <h3>{title} example</h3>
      <p>{summary}</p>
      {children}
      {code && (
        <pre className="example-code">
          <code>{code}</code>
        </pre>
      )}
    </section>
  );
}
