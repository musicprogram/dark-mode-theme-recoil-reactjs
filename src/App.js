import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isDark,setIsDark] = useState(false)

  const handleClick= () =>{
    setIsDark(!isDark);
  }

  return (
    <div className={`App ${isDark? 'dark-mode': ''}`}>
      <h2>Toggle Dark/Light Mode with RECOIL</h2>
      <p>Click the button to toggle between dark and light mode for this page.</p>
      <button
        className={isDark? 'button-dark-mode' : ''}
        onClick={handleClick}
      >
        change theme
      </button>
    </div>
  );
}

export default App;
