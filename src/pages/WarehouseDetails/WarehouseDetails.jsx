// GJ's work
import "./WarehouseDetails.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import iconReturn from "../../assets/icons/arrow_back-24px.svg";
import DetailsBody from "../../components/DetailsBody/DetailsBody";
import { Link } from "react-router-dom";
import { apiUrl } from "../../App";

function WarehouseDetails() {
    const navigate = useNavigate();

    const [warehouse, setWarehouse] = useState({});
    // This is extracting id from useParams.
    // id comes from our app.jsx under /warehouses/:id
    const { id } = useParams();
    const getWarehouseDetails = useCallback(
        (id) => {
            if (id) {
                axios.get(`${apiUrl}/warehouses/${id}`).then((response) => {
                    // we are calling setWarehouse here.
                    setWarehouse(response.data);
                });
            }
        },
        [id]
    );

    useEffect(() => {
        getWarehouseDetails(id);
    }, [getWarehouseDetails]);

    function handleOnBack(event) {
        // This prevents refreshing the page when you submit something.
        event.preventDefault();
        return navigate("/");
    }

    return (
        <div className="container">
            <div className="warehouse-header">
                <div className="warehouse-header__title">
                    <button className="warehouse-header__comeback" onClick={handleOnBack}>
                        <img src={iconReturn} alt="back" />
                    </button>
                    <h1 className="warehouse-header__text">{warehouse.warehouse_name}</h1>
                </div>
                <Link
                    // This links to edit page
                    to={`/warehouses/${warehouse.id}/edit`}
                    className="warehouse-header__button"
                    data-label="Edit"
                ></Link>
            </div>
            <section className="warehouse-info">
                <div className="warehouse-info__address">
                    <h3 className="warehouse-info__address--title">Warehouse Address:</h3>
                    <p className="warehouse-info__address--text">{warehouse.address}</p>
                </div>
                <div className="warehouse-row">
                    <div className="warehouse-row__contact">
                        <h4 className="warehouse-row__contact--title">Contact Name:</h4>
                        <p className="warehouse-row__contact--text">
                            {warehouse.contact_name}
                            <br />
                            {warehouse.contact_position}
                        </p>
                    </div>
                    <div className="warehouse-row__contact">
                        <h4 className="warehouse-row__contact--title">Contact information:</h4>
                        <p className="warehouse-row__contact--text">
                            {warehouse.contact_phone}
                            <br />
                            {warehouse.contact_email}
                        </p>
                    </div>
                </div>
            </section>
            <DetailsBody />
        </div>
    );
}
export default WarehouseDetails;
