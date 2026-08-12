import React, { useEffect, useState } from 'react';

// useEffect: runs after render. It is perfect for side effects like API calls, timers, subscriptions, and DOM updates.
export default function UseEffectExample() {
  const [status, setStatus] = useState('Online');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.title = `Status: ${status}`;
  }, [status]);

  return (
    <section style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
      <h3>2) useEffect</h3>
      <p>Purpose: perform side effects after render.</p>
      <p>Current time: {time}</p>
      <button onClick={() => setStatus('Busy')}>Set Busy</button>
      <button onClick={() => setStatus('Online')} style={{ marginLeft: '8px' }}>
        Set Online
      </button>
      <p>
        <strong>Explanation:</strong> The first effect runs once to start a timer, and the cleanup function clears it when the component unmounts.
      </p>
    </section>
  );
}
