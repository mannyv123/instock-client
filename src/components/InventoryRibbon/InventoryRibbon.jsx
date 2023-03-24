import React from 'react'
import './InventoryRibbon.scss'

function InventoryRibbon() {
  return (
    <div className='inventory-ribbon'>
        <div className="inventory-ribbon__col inventory-ribbon__col--1">Inventory Item
            <button className="sort" onclick=""></button>
        </div>
        <div className="inventory-ribbon__col inventory-ribbon__col--2">Category
            <button className="sort" onclick=""></button>
        </div>
        <div className="inventory-ribbon__col inventory-ribbon__col--3">Status
            <button className="sort" onclick=""></button>
        </div>
        <div className="inventory-ribbon__col inventory-ribbon__col--4">Qty
            <button className="sort" onclick=""></button>
        </div>
        <div className="inventory-ribbon__col inventory-ribbon__col--5">Warehouse
            <button className="sort" onclick=""></button>
        </div>
        <div className="inventory-ribbon__col inventory-ribbon__col--6">Actions
        </div>
    </div>
  )
}


export default InventoryRibbon