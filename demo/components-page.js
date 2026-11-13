import React from "react";
import ReactDOM from "react-dom/client";
import "./demo.css";
import { TOPIC_GROUPS } from "./data.js";
import Header from "./components/Header.js";
import ComponentsDemo from "./components/fundas/components/ComponentsDemo.jsx";
import JsxDemo from "./components/fundas/jsx/JsxDemo.jsx";
import PropDemo from "./components/fundas/props/PropDemo.jsx";
import StateDemo from "./components/fundas/state/StateDemo.jsx";
import VirtualDomDemo from "./components/fundas/virtual-dom/VirtualDomDemo.jsx";
import UseStateExample from "./components/hooks/UseStateExample.js";
import UseEffectExample from "./components/hooks/UseEffectExample.js";
import UseRefExample from "./components/hooks/UseRefExample.js";
import UseMemoExample from "./components/hooks/UseMemoExample.js";
import UseCallbackExample from "./components/hooks/UseCallbackExample.js";
import LifecycleDemo from "./components/lifecycle/LifecycleDemo.jsx";
import ApiIntegrationDemo from "./components/api/ApiIntegrationDemo.jsx";
import StateManagementDemo from "./components/state-management/StateManagementDemo.jsx";
import JavaScriptDemo from "./components/javascript/JavaScriptDemo.jsx";
import ReactPerformanceDemo from "./components/performance/ReactPerformanceDemo.jsx";
import FormsEventsDemo from "./components/forms/FormsEventsDemo.jsx";
import ReactRouterDemo from "./components/router/ReactRouterDemo.jsx";

const topicExamples = {
  components: ComponentsDemo,
  jsx: JsxDemo,
  props: PropDemo,
  state: StateDemo,
  "virtual-dom": VirtualDomDemo,
  "use-state": UseStateExample,
  "use-effect": UseEffectExample,
  "use-ref": UseRefExample,
  "use-memo": UseMemoExample,
  "use-callback": UseCallbackExample,
  mounting: LifecycleDemo,
  updating: LifecycleDemo,
  unmounting: LifecycleDemo,
  "effect-cleanup": LifecycleDemo,
  fetch: ApiIntegrationDemo,
  axios: ApiIntegrationDemo,
  "rest-apis": ApiIntegrationDemo,
  "api-error-handling": ApiIntegrationDemo,
  "props-drilling": StateManagementDemo,
  "context-api": StateManagementDemo,
  "redux-basics": StateManagementDemo,
  closures: JavaScriptDemo,
  promises: JavaScriptDemo,
  "async-await": JavaScriptDemo,
  "array-methods": JavaScriptDemo,
  memoization: ReactPerformanceDemo,
  "re-rendering": ReactPerformanceDemo,
  "lazy-loading": ReactPerformanceDemo,
  "controlled-components": FormsEventsDemo,
  "form-validation": FormsEventsDemo,
  "event-handling": FormsEventsDemo,
  routing: ReactRouterDemo,
  "nested-routes": ReactRouterDemo,
  "protected-routes": ReactRouterDemo,
};

const requestedTopicId =
  new URLSearchParams(window.location.search).get("topic") || "components";
const selectedGroup = TOPIC_GROUPS.find((group) =>
  group.topics.some((topic) => topic.id === requestedTopicId)
);
const selectedTopic = selectedGroup?.topics.find(
  (topic) => topic.id === requestedTopicId
);
const TopicExample = topicExamples[requestedTopicId];

if (selectedTopic) {
  document.title = `${selectedTopic.title} | React Preparation`;
}

function TopicPage() {
  return (
    <div>
      <Header groups={TOPIC_GROUPS} homeHref="index.html" />
      <main className="component-page">
        <a className="back-link" href="index.html">
          &larr; Back to all topics
        </a>
        {selectedTopic && TopicExample ? (
          <>
            <p className="topic-category">{selectedGroup.title}</p>
            <h2>{selectedTopic.title}</h2>
            <p className="component-intro">{selectedTopic.description}</p>
            <TopicExample topicId={selectedTopic.id} />
          </>
        ) : (
          <section className="study-card" aria-live="polite">
            <h2>Topic not found</h2>
            <p>
              Choose a topic from the navigation menu to open its preparation
              page.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TopicPage />);
