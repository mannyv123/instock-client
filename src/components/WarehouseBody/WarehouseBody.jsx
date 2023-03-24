import "./WarehouseBody.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import DeleteModal from "../../components/DeleteModal/DeleteModal";
export const apiUrl = "http://localhost:5001/api";

function WarehouseBody() {
    const [warehouses, setWarehouses] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        axios
            .get(`${apiUrl}/warehouses`)
            .then((response) => {
                setWarehouses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(warehouses);

    return (
        <ul className="warehouse-table">
            <li className="warehouse-table__header">
                <div className="warehouse-table__col warehouse-table__col--1">
                    Warehouse
                    <button className="sort"></button>
                </div>
                <div className="warehouse-table__col warehouse-table__col--2">
                    Address
                    <button className="sort"></button>
                </div>
                <div className="warehouse-table__col warehouse-table__col--3">
                    Contact Name
                    <button className="sort"></button>
                </div>
                <div className="warehouse-table__col warehouse-table__col--4">
                    Contact Information
                    <button className="sort"></button>
                </div>
                <div className="warehouse-table__col warehouse-table__col--5">Actions</div>
            </li>

            {warehouses.map((warehouse) => (
                <li className="warehouse-table__row" key={warehouse.id}>
                    <div className="warehouse-table__col warehouse-table__col--1" data-label="Warehouse">
                        <Link to={`/warehouses/${warehouse.id}`} className="warehouse-table__col--title">
                            {warehouse.warehouse_name}
                        </Link>
                    </div>
                    <div className="warehouse-table__col warehouse-table__col--2" data-label="Address">
                        {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </div>
                    <div className="warehouse-table__col warehouse-table__col--3" data-label="Contact Name">
                        {warehouse.contact_name}
                    </div>
                    <div
                        className="warehouse-table__col warehouse-table__col--4"
                        data-label="Contact Information"
                    >
                        {warehouse.contact_phone}
                        <br />
                        {warehouse.contact_email}
                    </div>
                    <div className="warehouse-table__col warehouse-table__col--5" data-label="Actions">
                        <button onClick={() => setIsOpen(true)} className="warehouse-table__col--btn">
                            <img src={deleteIcon} alt="delete" />
                        </button>
                        {/* {isOpen && ( */}
                        <DeleteModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            warehouse={warehouse}
                            warehouseId={warehouse.id}
                        />
                        {/* )} */}

                        {console.log(`warehouse name ${warehouse.warehouse_name}`)}
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
