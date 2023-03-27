import React from "react";
import { Link } from "react-router-dom";
import InventoryRow from "../InventoryRow/InventoryRow";
import InventoryRibbon from "../InventoryRibbon/InventoryRibbon";
import SearchHeader from "../SearchHeader/SearchHeader";
import "./InventoryList.scss";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";

function InventoryList({ inventoryItems, generateInventoryItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [inventory, setInventory] = useState();
    return (
        <div>
            <SearchHeader title="Inventory" buttonTitle="+ Add New Item" buttonLink="/inventory/add" />
            <div className="inventory-list">
                <InventoryRibbon />
                {isOpen && (
                    <DeleteModal
                        setIsOpen={setIsOpen}
                        item={inventory}
                        getItems={generateInventoryItems}
                        apiPath="/inventories"
                        type="inventory"
                        typePlural="inventories"
                    />
                )}
                {inventoryItems.map((inventory) => (
                    <InventoryRow
                        key={inventory.id}
                        inventory={inventory}
                        setIsOpen={setIsOpen}
                        setInventory={setInventory}
                    />
                ))}
            </div>
        </div>
    );
}

export default InventoryList;
