import React from 'react'
import { Link } from 'react-router-dom'
import InventoryRow from '../InventoryRow/InventoryRow'
import InventoryRibbon from '../InventoryRibbon/InventoryRibbon'
import SearchHeader from '../SearchHeader/SearchHeader'
import './InventoryList.scss'

function InventoryList({ inventoryItems }) {
  return (
    <div>
        <SearchHeader />
        <div className="inventory-list"> 
            <InventoryRibbon />
            { inventoryItems.map((inventory) => (          <InventoryRow key={inventory.id} inventory={inventory} />
                ) ) }
        </div>
    </div>
  )
}

export default InventoryList


{/* <Link key={inventory.id} to={`/inventory/${inventory.id}`}>
                    <InventoryRow inventory={inventory} />
                    </Link> */}