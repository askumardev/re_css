import React, { useEffect, useRef, useState } from 'react';

// useRef: creates a mutable reference that does not trigger re-render when updated.
export default function UseRefExample() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleIncrement = () => {
    countRef.current += 1;
    setCount((prev) => prev + 1);
  };

  return (
    <section style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
      <h3>3) useRef</h3>
      <p>Purpose: store a reference without causing render updates.</p>
      <input ref={inputRef} placeholder="Focus is applied on mount" />
      <button onClick={handleIncrement} style={{ marginLeft: '8px' }}>
        Increment + Re-render
      </button>
      <p>State count: {count}</p>
      <p>Ref count: {countRef.current}</p>
      <p>
        <strong>Explanation:</strong> useRef is useful for DOM references, timers, and values that should persist without causing re-renders.
      </p>
    </section>
  );
}
