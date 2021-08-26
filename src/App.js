// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.scss';

function App() {
  const [count] = useState(10);
  return (
    <div className="App">
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      <div>
        <h4>Total {count}</h4>
      </div>
    </div>
  );
}

export default App;
