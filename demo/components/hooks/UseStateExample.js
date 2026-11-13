import React, { useState } from 'react';

// useState: stores component state and updates the UI when the value changes.
// Interview answer: useState is used for local state such as counters, forms, toggles, and flags.
export default function UseStateExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  return (
    <section style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
      <h3>1) useState</h3>
      <p>Purpose: manage local state in a component.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)} style={{ marginLeft: '8px' }}>
        Decrement
      </button>
      <div style={{ marginTop: '12px' }}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type your name"
        />
        <p>Hello, {name}!</p>
      </div>
      <p>
        <strong>Explanation:</strong> When the state changes, React re-renders the component and updates the DOM.
      </p>
    </section>
  );
}
