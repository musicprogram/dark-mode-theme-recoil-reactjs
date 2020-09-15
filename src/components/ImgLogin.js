import React from "react";
import { useRecoilValue } from 'recoil'
import {darkModeState} from "../shared/globalState";

const urlMan = 'https://www.w3schools.com/howto/img_avatar.png';
const urlWomen = 'https://www.w3schools.com/howto/img_avatar2.png';

function ImgLogin() {
  const isDark = useRecoilValue(darkModeState);

  return(
    <div className="over">
      <img src={isDark? urlWomen : urlMan} alt="Avatar"/>
    </div>
  )
}


export default ImgLogin;