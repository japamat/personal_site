import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Components/Routes';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="site-content">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
