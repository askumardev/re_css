import React, { useState } from "react";
import TopicExample from "../../common/TopicExample";

export default function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <TopicExample
      title="Component state"
      summary="State stores values that change over time. Updating it requests a render with the new value."
      code={`const [count, setCount] = useState(0);

<button onClick={() => setCount((value) => value + 1)}>
  Count: {count}
</button>`}
    >
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment count: {count}
      </button>
    </TopicExample>
  );
}
