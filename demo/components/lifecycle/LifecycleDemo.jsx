import React, { useEffect, useState } from "react";
import TopicExample from "../common/TopicExample";

function TimerExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return <p>Mounted for {seconds} second(s).</p>;
}

export default function LifecycleDemo({ topicId }) {
  const [showTimer, setShowTimer] = useState(true);
  const topics = {
    mounting: {
      title: "Mounting",
      summary: "A component mounts when React adds it to the UI tree.",
      code: `useEffect(() => {
  // Runs after the component mounts.
}, []);`,
    },
    updating: {
      title: "Updating",
      summary: "A state or prop change can cause React to render a component again.",
      code: `const [count, setCount] = useState(0);
setCount((previous) => previous + 1);`,
    },
    unmounting: {
      title: "Unmounting",
      summary: "A component unmounts when it is removed from the UI tree.",
      code: `return () => {
  // Release resources when the component unmounts.
};`,
    },
    "effect-cleanup": {
      title: "Effect cleanup",
      summary: "Clean up timers and subscriptions before an effect re-runs or its component unmounts.",
      code: `useEffect(() => {
  const timer = setInterval(update, 1000);
  return () => clearInterval(timer);
}, []);`,
    },
  };
  const topic = topics[topicId];

  return (
    <TopicExample title={topic.title} summary={topic.summary} code={topic.code}>
      <button type="button" onClick={() => setShowTimer((visible) => !visible)}>
        {showTimer ? "Unmount timer" : "Mount timer"}
      </button>
      {showTimer && <TimerExample />}
    </TopicExample>
  );
}
