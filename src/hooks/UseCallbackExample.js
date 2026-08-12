import React, { useCallback, useState } from 'react';

// useCallback: returns a memoized function. Useful for preventing re-creation of callbacks when child components depend on them.
export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <section style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
      <h3>5) useCallback</h3>
      <p>Purpose: memoize functions to avoid unnecessary re-renders in child components.</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <p>
        <strong>Explanation:</strong> The callback is created once and reused until dependencies change, which helps performance and stable references.
      </p>
    </section>
  );
}
