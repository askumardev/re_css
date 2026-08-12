import React, { useMemo, useState } from 'react';

// useMemo: memoizes a computed value so it is recalculated only when dependencies change.
export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const expensiveValue = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 100000000; i += 1) {
      total += i;
    }
    return total;
  }, [count]);

  return (
    <section style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
      <h3>4) useMemo</h3>
      <p>Purpose: optimize expensive calculations.</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase count</button>
      <button onClick={() => setDarkMode((prev) => !prev)} style={{ marginLeft: '8px' }}>
        Toggle theme
      </button>
      <p>Count: {count}</p>
      <p>Expensive total: {expensiveValue}</p>
      <p>Theme: {darkMode ? 'Dark' : 'Light'}</p>
      <p>
        <strong>Explanation:</strong> The heavy calculation happens only when count changes, not every time the component re-renders.
      </p>
    </section>
  );
}
