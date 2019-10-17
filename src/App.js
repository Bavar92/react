import React from 'react';
import logo from './logo.svg';
import Welcome from './Welcome.js';
import './App.css';

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edits <code>src/App.js</code> and save to reload.
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
            <Welcome/>
        </div>
    );
}





export default App;
