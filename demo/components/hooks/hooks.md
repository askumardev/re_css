# React Hooks Notes for Interview and Revision

## 1) useState

### Purpose
useState is used to add local state to a functional component.

### Syntax
```jsx
const [state, setState] = useState(initialValue);
```

### Example
```jsx
const [count, setCount] = useState(0);
```

### Use cases
- Counters
- Toggle buttons
- Form field values
- Conditional UI states

### Interview explanation
"useState lets a function component hold and update its own data. Every time the state changes, React re-renders the component with the updated value."

---

## 2) useEffect

### Purpose
useEffect is used to run side effects after render such as API calls, timers, subscriptions, and updating document title.

### Syntax
```jsx
useEffect(() => {
  // side effect
  return () => {
    // cleanup
  };
}, [dependencies]);
```

### Example
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Running');
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

### Use cases
- Fetching data
- Setting up timers
- Listening to events
- Cleaning up subscriptions

### Interview explanation
"useEffect is the place for side effects. It runs after the render, and the return function acts as cleanup before the next effect or unmount."

---

## 3) useRef

### Purpose
useRef stores a mutable value that persists across renders without triggering re-render.

### Syntax
```jsx
const ref = useRef(initialValue);
```

### Example
```jsx
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);
```

### Use cases
- Accessing DOM elements
- Storing previous values
- Timer IDs
- Reusable mutable values

### Interview explanation
"useRef is different from state because updating a ref does not re-render the component. It is mostly used for DOM access and values that should persist without causing UI updates."

---

## 4) useMemo

### Purpose
useMemo memoizes a computed value and avoids recalculating it unless its dependencies change.

### Syntax
```jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependency]);
```

### Example
```jsx
const filteredList = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);
```

### Use cases
- Expensive calculations
- Derived data from props or state
- Performance optimization

### Interview explanation
"useMemo helps optimize performance by caching the result of a function until the relevant dependencies change."

---

## 5) useCallback

### Purpose
useCallback memoizes a function so it is not recreated on every render.

### Syntax
```jsx
const callback = useCallback(() => {
  doSomething();
}, [dependency]);
```

### Example
```jsx
const handleClick = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```

### Use cases
- Passing stable function references to child components
- Preventing unnecessary re-renders
- Event handlers with dependencies

### Interview explanation
"useCallback is similar to useMemo, but it memoizes the function itself instead of a computed value. It is mainly useful when passing callbacks to optimized child components."

---

## Important Interview Points

- Hooks let functional components use state and lifecycle behavior.
- Hooks must be called at the top level of a component or custom hook.
- Do not call hooks inside loops, conditions, or nested functions.
- useState is for local state, useEffect for side effects, and useRef for references.
- useMemo and useCallback are optimization hooks and should be used only when needed.

## Common Mistakes

- Updating state incorrectly without previous value.
- Not adding dependency arrays correctly in useEffect.
- Using useMemo or useCallback without a real performance need.
- Forgetting cleanup in useEffect.

## Short Interview Answer

"React Hooks are functions that allow functional components to use state and lifecycle features. useState manages local state, useEffect handles side effects, useRef gives access to persistent mutable references, useMemo memoizes expensive calculations, and useCallback memoizes functions to improve performance. Hooks help make components cleaner and more reusable."
