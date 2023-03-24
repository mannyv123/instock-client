import React from 'react'
import './InventoryHeader.scss'

function InventoryHeader() {
  return (
    <div className='search-header'>
        <h1 className='search-header__title'>Inventory</h1>
        <form className='search-header__form' action=''>
            <input className='search-header__input' type='search' placeholder='Search'></input>
            <button className='search-header__button'>+ Add New Search</button>
        </form>
    </div>
  )
}

export default InventoryHeader
