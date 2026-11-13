import React from "react";
import TopicExample from "../../common/TopicExample";

export default function JsxDemo() {
  const learner = "React learner";
  const topics = ["Elements", "Expressions", "Components"];

  return (
    <TopicExample
      title="JSX expressions"
      summary="Use curly braces to insert JavaScript values and expressions into markup."
      code={`const learner = "React learner";
return <h3>Hello, {learner}!</h3>;`}
    >
      <h4>Hello, {learner}!</h4>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </TopicExample>
  );
}
