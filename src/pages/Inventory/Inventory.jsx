import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { apiUrl } from "../../App";
import axios from "axios";
import { useEffect, useState } from "react";

// ------JIRA TICKET #J2VT1-20 -SEYON -------------------------------------
function Inventory() {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        generateInventoryItems();
    }, []);
    // diving deeper -GJ
    function generateInventoryItems(sort_by = "inventory_item", isAsc = true) {
        const order_by = isAsc ? "asc" : "desc";
        axios
            .get(`${apiUrl}/inventories?sort_by=${sort_by}&order_by=${order_by}`)
            .then((res) => {
                setInventoryItems(res.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    }

    // -----------------SEYON CODE END----------------------------------------

    return (
        <div className="container">
            <InventoryList inventoryItems={inventoryItems} generateInventoryItems={generateInventoryItems} />
        </div>
    );
}

export default Inventory;
