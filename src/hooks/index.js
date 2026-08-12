import React from 'react';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseRefExample from './UseRefExample';
import UseMemoExample from './UseMemoExample';
import UseCallbackExample from './UseCallbackExample';

export default function HooksExamples() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>React Hooks Examples</h2>
      <UseStateExample />
      <UseEffectExample />
      <UseRefExample />
      <UseMemoExample />
      <UseCallbackExample />
    </div>
  );
}
