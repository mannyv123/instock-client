import React from "react";
import InventoryRow from "../InventoryRow/InventoryRow";
import InventoryRibbon from "../InventoryRibbon/InventoryRibbon";
import SearchHeader from "../SearchHeader/SearchHeader";
import "./InventoryList.scss";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";

{
    /* diving deeper -GJ */
}
function InventoryList({ inventoryItems, generateInventoryItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [inventory, setInventory] = useState();

    //Manjot Code Start-------------------------
    const [search, setSearch] = useState("");

    //set search value based on input from search bar; search value is passed to warehouseBody via props
    const handleSearchInput = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    //columns not to search
    const excludeColumns = ["id", "status", "quantity"];

    //filter inventory listing; if no value, return all inventory items
    //else, check if any keys in inventory object are included in the excludeColumns array;
    //if not in that array, then return true if value of key includes search value
    const filteredInventory = inventoryItems.filter((inventory) => {
        const lowerCasedSearch = search.toLowerCase();
        if (search === "") {
            return inventory;
        } else {
            return Object.keys(inventory).some((key) => {
                return excludeColumns.includes(key)
                    ? false
                    : inventory[key].toString().toLowerCase().includes(lowerCasedSearch);
            });
        }
    });

    //Manjot Code End---------------------------

    return (
        <div>
            <SearchHeader
                title="Inventory"
                buttonTitle="+ Add New Item"
                buttonLink="/inventory/add"
                handleSearchInput={handleSearchInput}
            />
            <div className="inventory-list">
                {/* diving deeper -GJ */}
                <InventoryRibbon generateInventoryItems={generateInventoryItems} />
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
                {filteredInventory.map((inventory) => (
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
