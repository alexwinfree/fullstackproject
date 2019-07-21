import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <h1> 
      <button className= "search">  
        <input type= "text" placeholder=" Search here"></input>
      </button>

        <button className= "LogIn">
          Log in
          </button>

          <button className= "UserName">
            <input type="text" placeholder= "UserName"></input>            
          </button>

          <button className= "Password">
            <input type="text" placeholder= "Password"></input>            
          </button>
      </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and reload! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
