import React from 'react';
import './Header.scss';
import logo from '../../assets/logos/InStock-Logo_2x.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className='header__div'>
                <NavLink className='header__nav' to='/'>
                    <img className='header__logo' src={logo} alt='logo' />
                </NavLink>

                <div className='header__container'>
                    <NavLink className='header__button' to='/warehouses'>
                        Warehouses
                    </NavLink>
                    <NavLink className='header__button' to='/inventory'>
                        Inventory
                    </NavLink>
                </div>
            </div>
        </div>
        
    )
}

export default Header
