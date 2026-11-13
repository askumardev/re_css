export const TOPIC_GROUPS = [
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    topics: [
      {
        id: "components",
        title: "Components",
        description:
          "Build interfaces from small, reusable functions that return React elements.",
      },
      {
        id: "jsx",
        title: "JSX",
        description:
          "Write UI with HTML-like syntax in JavaScript, and use braces to include JavaScript expressions.",
      },
      {
        id: "props",
        title: "Props",
        description:
          "Pass read-only data from a parent component to configure its children.",
      },
      {
        id: "state",
        title: "State",
        description:
          "Store values that change over time and update the UI when those values change.",
      },
      {
        id: "virtual-dom",
        title: "Virtual DOM",
        description:
          "React describes the UI as a tree and efficiently updates the DOM when that description changes.",
      },
    ],
  },
  {
    id: "react-hooks",
    title: "React Hooks",
    topics: [
      {
        id: "use-state",
        title: "useState",
        description:
          "Add local state to a function component and update it with its setter.",
      },
      {
        id: "use-effect",
        title: "useEffect",
        description:
          "Synchronize a component with external systems and clean up effects when needed.",
      },
      {
        id: "use-ref",
        title: "useRef",
        description:
          "Keep a mutable value between renders or refer to a DOM element without triggering a render.",
      },
      {
        id: "use-memo",
        title: "useMemo",
        description:
          "Cache a calculated value between renders when its dependencies have not changed.",
      },
      {
        id: "use-callback",
        title: "useCallback",
        description:
          "Cache a function definition between renders when its dependencies have not changed.",
      },
    ],
  },
  {
    id: "component-lifecycle",
    title: "Component Lifecycle",
    topics: [
      {
        id: "mounting",
        title: "Mounting",
        description:
          "Understand what happens when a component first appears in the UI.",
      },
      {
        id: "updating",
        title: "Updating",
        description:
          "Follow how state and prop changes cause React to render updated UI.",
      },
      {
        id: "unmounting",
        title: "Unmounting",
        description:
          "Know when a component is removed and which resources should be released.",
      },
      {
        id: "effect-cleanup",
        title: "Cleanup",
        description:
          "Clean up subscriptions, timers, and other external work in an effect cleanup function.",
      },
    ],
  },
  {
    id: "api-integration",
    title: "API Integration",
    topics: [
      {
        id: "fetch",
        title: "Fetch",
        description:
          "Request data with the browser Fetch API and handle the response asynchronously.",
      },
      {
        id: "axios",
        title: "Axios",
        description:
          "Make HTTP requests with Axios and work with its response and error objects.",
      },
      {
        id: "rest-apis",
        title: "REST APIs",
        description:
          "Work with API resources using common HTTP methods such as GET, POST, PUT, and DELETE.",
      },
      {
        id: "api-error-handling",
        title: "Error Handling",
        description:
          "Handle network failures and unsuccessful responses, and show useful feedback to users.",
      },
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    topics: [
      {
        id: "props-drilling",
        title: "Props Drilling",
        description:
          "Trace data passed through intermediate components and recognize when that becomes difficult to maintain.",
      },
      {
        id: "context-api",
        title: "Context API",
        description:
          "Share values with a subtree without passing props through every intermediate component.",
      },
      {
        id: "redux-basics",
        title: "Redux Basics",
        description:
          "Organize shared state around a store, actions, and predictable updates.",
      },
    ],
  },
  {
    id: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    topics: [
      {
        id: "closures",
        title: "Closures",
        description:
          "See how functions retain access to variables from the scope where they were created.",
      },
      {
        id: "promises",
        title: "Promises",
        description:
          "Represent the eventual success or failure of an asynchronous operation.",
      },
      {
        id: "async-await",
        title: "Async/Await",
        description:
          "Write promise-based asynchronous code with a readable, sequential style.",
      },
      {
        id: "array-methods",
        title: "Array Methods",
        description:
          "Use methods such as map, filter, and reduce to transform and derive data.",
      },
    ],
  },
  {
    id: "react-performance",
    title: "React Performance",
    topics: [
      {
        id: "memoization",
        title: "Memoization",
        description:
          "Cache values or rendered components when doing so avoids meaningful repeated work.",
      },
      {
        id: "re-rendering",
        title: "Re-rendering",
        description:
          "Understand what triggers renders and keep component updates focused.",
      },
      {
        id: "lazy-loading",
        title: "Lazy Loading",
        description:
          "Load code or resources only when they are needed to reduce initial work.",
      },
    ],
  },
  {
    id: "forms-and-events",
    title: "Forms and Events",
    topics: [
      {
        id: "controlled-components",
        title: "Controlled Components",
        description:
          "Keep form values in React state and update them through event handlers.",
      },
      {
        id: "form-validation",
        title: "Validation",
        description:
          "Check user input and provide clear feedback before submitting a form.",
      },
      {
        id: "event-handling",
        title: "Event Handling",
        description:
          "Respond to user actions with event handlers and update the UI as needed.",
      },
    ],
  },
  {
    id: "react-router",
    title: "React Router",
    topics: [
      {
        id: "routing",
        title: "Routing",
        description:
          "Connect URL paths to the screens rendered by a React application.",
      },
      {
        id: "nested-routes",
        title: "Nested Routes",
        description:
          "Compose related routes so child screens render within a shared parent layout.",
      },
      {
        id: "protected-routes",
        title: "Protected Routes",
        description:
          "Restrict access to routes based on application state such as a signed-in user.",
      },
    ],
  },
];
