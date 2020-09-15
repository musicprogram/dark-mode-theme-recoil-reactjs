import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil'
import {darkModeState, handleChangeState} from '../shared/globalState'

function Button(){

  const isDark = useRecoilState(darkModeState);

  const toggleDarkMode = useSetRecoilState(handleChangeState)

  return(
    <button
      className={isDark? 'button-dark-mode' : ''}
      onClick={toggleDarkMode}
    >
      change theme
    </button>
  )
}


export default Button;