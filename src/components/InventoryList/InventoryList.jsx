import React from 'react'
import { Link } from 'react-router-dom'
import InventoryRow from '../InventoryRow/InventoryRow'
import InventoryRibbon from '../InventoryRibbon/InventoryRibbon'
import InventoryHeader from '../InventoryHeader/InventoryHeader'
import './InventoryList.scss'

function InventoryList({ inventoryItems }) {
  return (
    <div>
        <InventoryHeader />
        <div className="inventory-list"> 
            <InventoryRibbon />
            { inventoryItems.map((inventory) => (          <InventoryRow key={inventory.id} inventory={inventory} />
                ) ) }
        </div>
    </div>
  )
}

export default InventoryList