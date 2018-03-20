import React, { Component } from 'react'
import './App.css'
import SmsMenu from './SmsMenu'
import LogoImage from './burstsmslogo.png'


class App extends Component {
  render() {
    return (
      <div className='app-window'>
        <div className='nav-bar'> </div>
        <img src={LogoImage} className='logo' alt='Burst SMS Logo' />
        <div className='module-window'>
          <SmsMenu />
        </div>
        <div className='nav-bar'> </div>
      </div>
    )
  }
}

export default App
