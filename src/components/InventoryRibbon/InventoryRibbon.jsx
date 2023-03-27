import React from "react";
import "./InventoryRibbon.scss";
import { useState } from "react";

function InventoryRibbon({generateInventoryItems}) {
    // diving deeper -GJ
    const [inventoryItemOrderBy, setInventoryItemOrderBy] = useState(true);
    const [categoryOrderBy, setCategoryOrderBy] = useState(true);
    const [statusOrderBy, setStatusOrderBy] = useState(true);
    const [quantityOrderBy, setQuantityOrderBy] = useState(true);
    const [warehouseOrderBy, setWarehouseOrderBy] = useState(true);

    //----------------------------------------

    return (
        <div className="inventory-ribbon">
            <div className="inventory-ribbon__col inventory-ribbon__col--1">
                Inventory Item
                {/* diving deeper -GJ */}
                <button className="sort" onClick={() => {
                    generateInventoryItems("inventory_item", inventoryItemOrderBy);
                    setInventoryItemOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className="inventory-ribbon__col inventory-ribbon__col--2">
                Category
                {/* diving deeper -GJ */}
                <button className="sort" onClick={() => {
                    generateInventoryItems("category", categoryOrderBy);
                    setCategoryOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className="inventory-ribbon__col inventory-ribbon__col--3">
                Status
                {/* diving deeper -GJ */}
                <button className="sort" onClick={() => {
                    generateInventoryItems("status", statusOrderBy);
                    setStatusOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className="inventory-ribbon__col inventory-ribbon__col--4">
                Qty
                {/* diving deeper -GJ */}
                <button className="sort" onClick={() => {
                    generateInventoryItems("quantity", quantityOrderBy);
                    setQuantityOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className="inventory-ribbon__col inventory-ribbon__col--5">
                Warehouse
                {/* diving deeper -GJ */}
                <button className="sort" onClick={() => {
                    generateInventoryItems("warehouse_id", warehouseOrderBy);
                    setWarehouseOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className="inventory-ribbon__col inventory-ribbon__col--6">Actions</div>
        </div>
    );
}

export default InventoryRibbon;
