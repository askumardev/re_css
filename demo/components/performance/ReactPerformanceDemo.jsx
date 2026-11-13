import React, { memo, useMemo, useState } from "react";
import TopicExample from "../common/TopicExample";

const ResultLabel = memo(function ResultLabel({ value }) {
  return <p>Memoized child value: {value}</p>;
});

export default function ReactPerformanceDemo({ topicId }) {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const topics = {
    memoization: {
      title: "Memoization",
      summary: "Memoize derived values only when profiling shows recalculating them is costly.",
      code: `const visibleItems = useMemo(
  () => filterItems(items, query),
  [items, query]
);`,
    },
    "re-rendering": {
      title: "Re-rendering",
      summary: "State and prop updates trigger renders. Keep state near the UI that uses it and profile before optimizing.",
      code: `const MemoizedChild = memo(function Child({ value }) {
  return <p>{value}</p>;
});`,
    },
    "lazy-loading": {
      title: "Lazy loading",
      summary: "React.lazy and Suspense can defer loading a component until it is rendered.",
      code: `const Settings = lazy(() => import("./Settings"));

<Suspense fallback={<p>Loading...</p>}>
  <Settings />
</Suspense>`,
    },
  };
  const topic = topics[topicId];
  const squared = useMemo(() => count * count, [count]);

  return (
    <TopicExample title={topic.title} summary={topic.summary} code={topic.code}>
      <div className={`performance-demo theme-${theme}`}>
        <p>Count: {count}; derived square: {squared}</p>
        <ResultLabel value={count} />
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Update count
        </button>
        <button
          type="button"
          onClick={() =>
            setTheme((value) => (value === "light" ? "dark" : "light"))
          }
        >
          Change unrelated theme state
        </button>
        {topicId === "lazy-loading" && (
          <p>In a routed app, this topic page could be loaded on demand.</p>
        )}
      </div>
    </TopicExample>
  );
}
