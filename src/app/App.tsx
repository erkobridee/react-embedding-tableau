import { useState } from 'react';

import reactLogo from 'assets/react.svg';
import viteLogo from 'assets/vite.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const buttonClickHandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex justify-center space-x-5">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>
        <b>
          <i>POC-R+TEA</i>
        </b>{' '}
        - Proof Of Concept - React.js + Tableau Embedded Analytics
      </h1>

      <div className="flex flex-col justify-center space-y-5">
        <div>
          <button onClick={buttonClickHandler}>count is {count}</button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
