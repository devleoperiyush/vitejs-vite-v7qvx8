import React, { useState, useMemo } from 'react';

const computeExpensiveValue = (count : any) => {
  console.log('Computing expensive value...');
  for (let i = 0; i < 1000000000; i++) {} // Simulate expensive computation
  return count * 2;
};

const ParentComponent1 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize the result of the expensive computation
  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default ParentComponent1;
