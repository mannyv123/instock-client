import React from 'react'
import './Header.scss'
import logo from '../../assets/logo/InStock-Logo_2x.png'

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={logo} alt="logo" />
        <div className="header__container">
            <button className='header__button'>Warehouses</button>
            <button className='header__button'>Inventory</button>
        </div>
    </div>
  )
}

export default Header