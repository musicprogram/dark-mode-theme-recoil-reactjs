import React from 'react';
import './App.css';

import { useRecoilValue} from 'recoil'
import {darkModeState} from './shared/globalState'

import Button from './components/Button'
import ImgLogin from './components/ImgLogin'


function App() {


  const isDark = useRecoilValue(darkModeState);

  const handleClick= () =>{
    console.log(!isDark);
  }

  return (
    <div className={`App ${isDark? 'dark-mode': ''}`}>
      <h2>Toggle Dark/Light Mode with RECOIL</h2>
      <p>Click the button to toggle between dark and light mode for this page.</p>
      <ImgLogin/>
      <Button/>
    </div>
  );
}

export default App;
