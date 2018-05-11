import React from 'react'
import shelfie_icon from '../houser_logo.png'

function Header(props) {
  return (
    <div className="headerContainer medgreen flexH aic">
      <div className="flexH aic logo">
        <div><img src={shelfie_icon} alt=""/></div>
        <div>&nbsp;&nbsp;<strong>Houser</strong></div>
      </div>
      
    </div>
  )
}

export default Header