import React, { useState } from "react";
import TopicExample from "../../common/TopicExample";

export default function VirtualDomDemo() {
  const [message, setMessage] = useState("This text is managed by React.");

  return (
    <TopicExample
      title="UI updates"
      summary="When state changes, React renders the updated UI description and reconciles the changes with the browser DOM."
      code={`setMessage("The state changed.");

return <p>{message}</p>;`}
    >
      <p aria-live="polite">{message}</p>
      <button
        type="button"
        onClick={() => setMessage("The state changed; React updated this text.")}
      >
        Update message
      </button>
    </TopicExample>
  );
}
