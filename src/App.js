import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div class="reddit-icon">
          <a aria-label="Home" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                <path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path>
              </g>
            </svg>
          </a>
        </div>

        <div className="popular-bar">
          <div className="popular-button">
            <svg width="20" height="20" class="graph" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"></polygon></svg>
            <div class="popular">Popular</div>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"></path></svg>
          </div>
        </div>

        <div className="icons">
          <div class="button">
            <a class="arrow" id="header-quicklinks-popular" href="/">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6">
                </polygon>
              </svg>
            </a>
            <a class="graph" id="header-quicklinks-all" href="/r/all/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1.25,17.5V7.5h5v10Zm11.25,0h-5V5H5l5-5,5,5H12.5Zm1.25,0v-5h5v5Z"></path></svg>
            </a>
            <a class="oc" id="header-quicklinks-oc" href="/original/"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17,3a2,2,0,0,1,2,2V15a2,2,0,0,1-2,2H3a2,2,0,0,1-2-2V5A2,2,0,0,1,3,3ZM14,13.35a3.06,3.06,0,0,0,2.87-1.78L15.18,11a1.47,1.47,0,0,1-1.35.84A1.65,1.65,0,0,1,12.35,10a1.66,1.66,0,0,1,1.49-1.83A1.38,1.38,0,0,1,15.13,9l1.57-.72A3,3,0,0,0,14,6.64a3.36,3.36,0,1,0,0,6.71Zm-7.34,0a3.36,3.36,0,1,0,0-6.72,3.36,3.36,0,1,0,0,6.72Zm0-5.2A1.7,1.7,0,0,1,8.26,10a1.71,1.71,0,0,1-1.64,1.84A1.7,1.7,0,0,1,5,10,1.7,1.7,0,0,1,6.62,8.16Z"></path></svg></a></div>
        </div>


        <div className="move-to-right">
          <button className="header-button">
            Log in
          </button>

          <button className="header-button">
            Signup
          </button>
        </div>
        <div className="searchBar">
          <input type="search" id="header-search-bar" name="q" class="search" placeholder="Search Reddit" value="">
          </input>
        </div>
      </header>


    </div>
  )
}




export default App;
