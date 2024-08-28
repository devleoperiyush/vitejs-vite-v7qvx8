import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick, count } : any) => {
  console.log('ChildComponent re-rendered');
  return <button onClick={onClick}>Increment Parent Count: {count}</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize the increment function
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <ChildComponent onClick={incrementCount} count={count} />
    </div>
  );
};

export default ParentComponent;



// // Why we need to use react.memo inside this 

// 1. useCallback
// useCallback is a hook that returns a memoized version of a callback function. This is useful when passing functions as props to child components, as it prevents those components from re-rendering unless necessary.

// Explanation:
// Without useCallback: The incrementCount function would be re-created on every render, causing ChildComponent to re-render every time even if text changes.
// With useCallback: incrementCount is memoized and only changes when count changes, so ChildComponent only re-renders when necessary.
// Output:
// When you type in the input field, ChildComponent does not re-render.
// When you click the button, ChildComponent re-renders because the count prop changes.



// Then whats the benefit of usecallback , as per my understanding even react.memo cant prevent rerender the function If we passed function as props and for avoiding that situation we need to use callback for function is it correct?
// ChatGPT said:
// ChatGPT
// You're correct in your understanding that useCallback and React.memo serve different but complementary purposes in React. Let's break down their roles:

// 1. React.memo:
// React.memo is used to prevent unnecessary re-renders of a component by memoizing the component itself. It does this by shallowly comparing the component's props. If the props haven't changed, the component won't re-render.
// Limitation: If you pass a non-memoized function as a prop, React.memo will see it as a new function on each render (because functions in JavaScript are reference types, and a new function instance is created on every render), causing the component to re-render even if nothing else has changed.
// 2. useCallback:
// useCallback is used to memoize a function so that the same function instance is passed as a prop to a child component unless its dependencies change.
// This prevents the child component from re-rendering unnecessarily if it's wrapped with React.memo, because now the function reference remains the same between renders, unless its dependencies change.
// How They Work Together:
// React.memo prevents re-renders of the component when its props don't change.
// useCallback ensures that a stable function reference is passed as a prop, preventing React.memo from mistakenly thinking the props have changed just because a new function instance was created.

// Explanation:
// The incrementCount function is now memoized using useCallback, so the same function reference is passed to ChildComponent on every render, unless count changes.
// Now, React.memo can effectively prevent ChildComponent from re-rendering when only the text state changes in ParentComponent.
// Summary:
// useCallback is essential when passing functions as props to prevent unnecessary re-renders of child components that are memoized with React.memo.
// React.memo and useCallback work together to optimize performance by ensuring that both component and function references remain stable when they don't need to change.