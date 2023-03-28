import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
// GJ's work
import "./AddWarehousesPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

const initialValues = {
    // Warehouse Details
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    // Contact Details
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
};

function WarehousesAdd() {
    const navigate = useNavigate();
    const [warehouse, setWarehouse] = useState(initialValues);
    //-------validation
    const [isErrorWarehouseName, setIsErrorWarehouseName] = useState(false);
    const [isErrorAddress, setIsErrorAddress] = useState(false);
    const [isErrorCity, setIsErrorCity] = useState(false);
    const [isErrorCountry, setIsErrorCountry] = useState(false);
    const [isErrorContactName, setIsErrorContactName] = useState(false);
    const [isErrorContactPosition, setIsErrorContactPosition] = useState(false);
    const [isErrorContactPhone, setIsErrorContactPhone] = useState(false);
    const [isErrorContactEmail, setIsErrorContactEmail] = useState(false);

    function handleOnBack(event) {
        // This prevents refreshing the page when you submit something.
        event.preventDefault();
        return navigate("/");
    }

    function handleSubmit(event) {
        event.preventDefault();
        let isError = false;
        const re_email = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}"); // matches w something@something.com
        const re_phone = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{4}"); // matches w 123-123-1234

        setIsErrorWarehouseName(false);
        setIsErrorAddress(false);
        setIsErrorCity(false);
        setIsErrorCountry(false);
        setIsErrorContactName(false);
        setIsErrorContactPosition(false);
        setIsErrorContactPhone(false);
        setIsErrorContactEmail(false);

        if (warehouse.warehouse_name === "") {
            setIsErrorWarehouseName(true);
            isError = true;
        }
        if (warehouse.address === "") {
            setIsErrorAddress(true);
            isError = true;
        }
        if (warehouse.city === "") {
            setIsErrorCity(true);
            isError = true;
        }
        if (warehouse.country === "") {
            setIsErrorCountry(true);
            isError = true;
        }
        if (warehouse.contact_name === "") {
            setIsErrorContactName(true);
            isError = true;
        }
        if (warehouse.contact_position === "") {
            setIsErrorContactPosition(true);
            isError = true;
        }
        if (warehouse.contact_phone === "" || !re_phone.test(warehouse.contact_phone)) {
            setIsErrorContactPhone(true);
            isError = true;
        }
        if (warehouse.contact_email === "" || !re_email.test(warehouse.contact_email)) {
            setIsErrorContactEmail(true);
            isError = true;
        }

        if (isError) {
            alert("error!");
        } else {
            postNewWarehouse();
            alert("submitted!");
            return navigate("/");
        }
    }

    // This handles the onChange for all inputs.
    function handleWarehouseOnChange(event) {
        const { name, value } = event.target;
        setWarehouse({
            ...warehouse,
            [name]: value,
        });
    }

    async function postNewWarehouse() {
        try {
            const response = await axios.post(`${apiUrl}/warehouses`, warehouse);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="container">
                <form className="content" onSubmit={handleSubmit}>
                    <div className="content__sub-container">
                        <div className="content__arrow-back" onClick={handleOnBack}>
                            <span className="content__arrow-back--icon"></span>
                        </div>
                        <h1 className="content__header">Add New Warehouse</h1>
                    </div>
                    <div className="content__container">
                        <div className="content__details-container">
                            <div className="content__input-container">
                                <h2 className="content__title">Warehouse Details</h2>
                                <h3 className="content__input-label content__input-label--first">
                                    Warehouse Name
                                </h3>
                                <input
                                    name="warehouse_name"
                                    onChange={handleWarehouseOnChange}
                                    className={`content__input-txt ${
                                        isErrorWarehouseName ? "error-state" : ""
                                    }`}
                                    type="text"
                                    value={warehouse.warehouse_name}
                                    placeholder="Warehouse Name"
                                />
                                {isErrorWarehouseName && <ErrorMsg />}
                                <h3 className="content__input-label">Street Address</h3>
                                <input
                                    name="address"
                                    onChange={handleWarehouseOnChange}
                                    className={`content__input-txt ${isErrorAddress ? "error-state" : ""}`}
                                    type="text"
                                    value={warehouse.address}
                                    placeholder="Street Address"
                                />
                                {isErrorAddress && <ErrorMsg />}
                                <h3 className="content__input-label">City</h3>
                                <input
                                    name="city"
                                    onChange={handleWarehouseOnChange}
                                    className={`content__input-txt ${isErrorCity ? "error-state" : ""}`}
                                    type="text"
                                    value={warehouse.city}
                                    placeholder="City"
                                />
                                {isErrorCity && <ErrorMsg />}
                                <h3 className="content__input-label">Country</h3>
                                <input
                                    name="country"
                                    onChange={handleWarehouseOnChange}
                                    className={`content__input-txt ${isErrorCountry ? "error-state" : ""}`}
                                    type="text"
                                    value={warehouse.country}
                                    placeholder="Country"
                                />
                                {isErrorCountry && <ErrorMsg />}
                            </div>
                        </div>

                        <div className="content__details-container">
                            <h2 className="content__title">Contact Details</h2>
                            <h3 className="content__input-label content__input-label--first">Contact Name</h3>
                            <input
                                name="contact_name"
                                onChange={handleWarehouseOnChange}
                                className={`content__input-txt ${isErrorContactName ? "error-state" : ""}`}
                                type="text"
                                value={warehouse.contact_name}
                                placeholder="Contact Name"
                            />
                            {isErrorContactName && <ErrorMsg />}
                            <h3 className="content__input-label">Position</h3>
                            <input
                                name="contact_position"
                                onChange={handleWarehouseOnChange}
                                className={`content__input-txt ${
                                    isErrorContactPosition ? "error-state" : ""
                                }`}
                                type="text"
                                value={warehouse.contact_position}
                                placeholder="Position"
                            />
                            {isErrorContactPosition && <ErrorMsg />}
                            <h3 className="content__input-label">Phone Number</h3>
                            <input
                                name="contact_phone"
                                onChange={handleWarehouseOnChange}
                                className={`content__input-txt ${isErrorContactPhone ? "error-state" : ""}`}
                                type="text"
                                value={warehouse.contact_phone}
                                placeholder="Phone Number"
                            />
                            {isErrorContactPhone && <ErrorMsg isErrorContactPhone={isErrorContactPhone} />}
                            <h3 className="content__input-label">Email</h3>
                            <input
                                name="contact_email"
                                onChange={handleWarehouseOnChange}
                                className={`content__input-txt ${isErrorContactEmail ? "error-state" : ""}`}
                                type="text"
                                value={warehouse.contact_email}
                                placeholder="Email"
                            />
                            {isErrorContactEmail && <ErrorMsg isErrorContactEmail={isErrorContactEmail} />}
                        </div>
                    </div>
                    <div className="content__buttons-container">
                        <button className="content__cancel">Cancel</button>
                        <button className="content__submit" type="submit">
                            + Add Warehouse
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default WarehousesAdd;
