import React, { useState } from "react";
import TopicExample from "../common/TopicExample";

const routes = {
  "/": "Home page",
  "/settings": "Settings page",
  "/account/profile": "Nested profile page",
};

export default function ReactRouterDemo({ topicId }) {
  const [path, setPath] = useState("/");
  const topics = {
    routing: {
      title: "Routing",
      summary: "A router matches the current URL to the screen that should be rendered.",
      code: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/settings" element={<Settings />} />
</Routes>`,
    },
    "nested-routes": {
      title: "Nested routes",
      summary: "Nested routes render child screens inside a shared parent layout.",
      code: `<Route path="/account" element={<AccountLayout />}>
  <Route path="profile" element={<Profile />} />
</Route>`,
    },
    "protected-routes": {
      title: "Protected routes",
      summary: "A protected route checks authorization state before showing a private screen.",
      code: `return user
  ? <Outlet />
  : <Navigate to="/login" replace />;`,
    },
  };
  const topic = topics[topicId];

  return (
    <TopicExample title={topic.title} summary={topic.summary} code={topic.code}>
      <nav className="route-demo" aria-label="Example routes">
        {Object.keys(routes).map((route) => (
          <button
            type="button"
            key={route}
            aria-current={path === route ? "page" : undefined}
            onClick={() => setPath(route)}
          >
            {route}
          </button>
        ))}
      </nav>
      <p aria-live="polite">
        Current route: <strong>{path}</strong> — {routes[path]}
      </p>
      {topicId === "protected-routes" && (
        <p>
          Protected routes should also enforce permissions on the server for
          sensitive data.
        </p>
      )}
    </TopicExample>
  );
}
