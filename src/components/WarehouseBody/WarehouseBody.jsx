import "./WarehouseBody.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../App";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import WarehouseHeader from "../WarehouseHeader/WarehouseHeader";

function WarehouseBody({ search }) {
    const [warehouses, setWarehouses] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [warehouse, setWarehouse] = useState();

    useEffect(() => {
        getWarehouses();
    }, []);

    // diving deeper -GJ
    function getWarehouses(sort_by = "warehouse_name", isAsc = true) {
        const order_by = isAsc ? "asc" : "desc";
        //-------------------------------------------
        axios
            .get(`${apiUrl}/warehouses?sort_by=${sort_by}&order_by=${order_by}`)
            .then((response) => {
                setWarehouses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Manjot Code Start---------------

    //columns not to search
    const excludeColumns = ["id", "contact_position"];

    //filter inventory listing; if no value, return all inventory items
    //else, check if any keys in inventory object are included in the excludeColumns array;
    //if not in that array, then return true if value of key includes search value
    const filteredWarehouses = warehouses.filter((warehouse) => {
        const lowerCasedSearch = search.toLowerCase();
        if (search === "") {
            return warehouse;
        } else {
            return Object.keys(warehouse).some((key) => {
                return excludeColumns.includes(key)
                    ? false
                    : warehouse[key].toString().toLowerCase().includes(lowerCasedSearch);
            });
        }
    });

    // Manjot Code End-----------------

    return (
        <ul className="warehouse-table">
            {/* diving deeper -GJ */}
            <WarehouseHeader getWarehouses={getWarehouses} />
            {/* Manjot Code Start */}
            {isOpen && (
                <DeleteModal
                    setIsOpen={setIsOpen}
                    item={warehouse}
                    getItems={getWarehouses}
                    apiPath="/warehouses"
                    type="warehouse"
                    typePlural="warehouses"
                />
            )}
            {/* Manjot Code End */}
            {filteredWarehouses.map((warehouse) => (
                <li className="warehouse-table__row" key={warehouse.id}>
                    <div className="warehouse-table__col warehouse-table__col--1" data-label="Warehouse">
                        <Link to={`/warehouses/${warehouse.id}`} className="warehouse-table__col--title">
                            <span className="warehouse-table__col--span">{warehouse.warehouse_name}</span>
                        </Link>
                    </div>
                    <div className="warehouse-table__col warehouse-table__col--2" data-label="Address">
                        <span className="warehouse-table__col--span">
                            {warehouse.address}, {warehouse.city}, {warehouse.country}
                        </span>
                    </div>
                    <div className="warehouse-table__col warehouse-table__col--3" data-label="Contact Name">
                        <span className="warehouse-table__col--span">{warehouse.contact_name}</span>
                    </div>
                    <div
                        className="warehouse-table__col warehouse-table__col--4"
                        data-label="Contact Information"
                    >
                        <span className="warehouse-table__col--span">
                            {warehouse.contact_phone}
                            <br />
                            {warehouse.contact_email}
                        </span>
                    </div>
                    <div className="warehouse-table__col warehouse-table__col--5" data-label="Actions">
                        <button
                            onClick={() => {
                                setIsOpen(true);
                                setWarehouse(warehouse);
                            }}
                            className="warehouse-table__col--btn"
                        >
                            <img src={deleteIcon} alt="delete" />
                        </button>
                        <Link to={`/warehouses/${warehouse.id}/edit`} className="warehouse-table__col--btn">
                            <img src={editIcon} alt="edit" />
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default WarehouseBody;
