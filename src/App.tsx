import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import TestForm from './components/form';
import './App.css';
// import ParentComponent from './components/callback/callback';
import ParentComponent from './components/callback/memo';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>("intial");

  useEffect(() => {
    console.log('call');
    setCount((prev) => prev + 1);
  }, []);

  const handleOnChange = (value : any) => {
    console.log(value);
    setName(value);
  }
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} {name}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
     {/* <ParentComponent /> */}
      <ParentComponent /> 

       {/* <TestForm testName={name} handleOnChange = {handleOnChange}></TestForm> */}
    </>
  );
}

export default App;
