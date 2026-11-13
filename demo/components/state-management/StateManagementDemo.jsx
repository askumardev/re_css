import React, { createContext, useContext, useReducer, useState } from "react";
import TopicExample from "../common/TopicExample";

const ThemeContext = createContext("light");

function ThemeLabel() {
  return <p>Current context theme: {useContext(ThemeContext)}</p>;
}

function countReducer(count, action) {
  if (action.type === "increment") return count + 1;
  if (action.type === "reset") return 0;
  return count;
}

export default function StateManagementDemo({ topicId }) {
  const [theme, setTheme] = useState("light");
  const [count, dispatch] = useReducer(countReducer, 0);
  const topics = {
    "props-drilling": {
      title: "Props drilling",
      summary: "Props can pass data through intermediate components. Keep the chain explicit and consider context when many layers only forward the same value.",
      code: `<App user={user}>
  <Layout user={user}>
    <Profile user={user} />
  </Layout>
</App>`,
    },
    "context-api": {
      title: "Context API",
      summary: "A provider supplies a value to descendants that read it with useContext.",
      code: `const ThemeContext = createContext("light");

<ThemeContext.Provider value="dark">
  <Profile />
</ThemeContext.Provider>`,
    },
    "redux-basics": {
      title: "Redux basics",
      summary: "Redux organizes shared state around a store and predictable actions; reducers describe how state changes.",
      code: `function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }
  return state;
}`,
    },
  };
  const topic = topics[topicId];

  return (
    <TopicExample title={topic.title} summary={topic.summary} code={topic.code}>
      {topicId === "context-api" ? (
        <ThemeContext.Provider value={theme}>
          <ThemeLabel />
          <button
            type="button"
            onClick={() =>
              setTheme((value) => (value === "light" ? "dark" : "light"))
            }
          >
            Toggle provided theme
          </button>
        </ThemeContext.Provider>
      ) : (
        <>
          <p>Reducer state: {count}</p>
          <button
            type="button"
            onClick={() => dispatch({ type: "increment" })}
          >
            Dispatch increment
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </>
      )}
    </TopicExample>
  );
}
