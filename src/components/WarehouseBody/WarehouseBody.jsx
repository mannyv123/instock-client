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

    function getWarehouses() {
        axios
            .get(`${apiUrl}/warehouses`)
            .then((response) => {
                setWarehouses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Manjot Code Start

    const filteredWarehouses = warehouses.filter((warehouse) => {
        if (search === "") {
            return warehouse;
        } else {
            return warehouse.warehouse_name.toLowerCase().includes(search);
        }
    });

    // Manjot Code End

    return (
        <ul className="warehouse-table">
            <WarehouseHeader />
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
                        <button className="warehouse-table__col--btn">
                            <img src={editIcon} alt="edit" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default WarehouseBody;
