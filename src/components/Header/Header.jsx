import React from 'react'
import './Header.scss'
import logo from '../../assets/logo/InStock-Logo_2x.png'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={logo} alt="logo" />
        <div className="header__container">
            <NavLink className='header__button' to='/warehouses'>Warehouses
                {/* <div className='header__button'> */}
                    {/* <p className='header__text'>Warehouses</p> */}
                {/* </div> */}
            </NavLink>
            <NavLink className='header__button' to='/inventory'>Inventory
                {/* <div className='header__button'> */}
                    {/* <p className='header__text'>Inventory</p>
                </div> */}
            </NavLink>
        </div>
    </div>
  )
}

export default Header