import "./AddInventoryPage.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import { apiUrl } from "../../App";

const initialValues = {
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
    warehouse_id: "",
};

function AddInventoryPage() {
    const [warehouses, setWarehouses] = useState([]);
    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();
    const [isInvalidName, setIsInvalidName] = useState(false);
    const [isInvalidDesc, setIsInvalidDesc] = useState(false);
    const [isInvalidCategory, setIsInvalidCategory] = useState(false);
    const [isInvalidStatus, setIsInvalidStatus] = useState(false);
    const [isInvalidQuantity, setIsInvalidQuantity] = useState(false);
    const [isInvalidWarehouse, setIsInvalidWarehouse] = useState(false);

    //Handles updating input values
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    //Get current warehouses for dropdown selection
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

    //Form validation function
    const isFormValid = () => {
        setIsInvalidName(false);
        setIsInvalidDesc(false);
        setIsInvalidCategory(false);
        setIsInvalidStatus(false);
        setIsInvalidQuantity(false);
        setIsInvalidWarehouse(false);
        if (
            !values.item_name &&
            !values.description &&
            !values.category &&
            !values.status &&
            !values.quantity &&
            !values.warehouse_id
        ) {
            setIsInvalidName(true);
            setIsInvalidDesc(true);
            setIsInvalidCategory(true);
            setIsInvalidStatus(true);
            setIsInvalidQuantity(true);
            setIsInvalidWarehouse(true);
            return false;
        } else if (!values.item_name) {
            setIsInvalidName(true);
            return false;
        } else if (!values.description) {
            setIsInvalidDesc(true);
            return false;
        } else if (!values.category) {
            setIsInvalidCategory(true);
            return false;
        } else if (!values.status) {
            setIsInvalidStatus(true);
            return false;
        } else if (values.quantity <= 0 && values.status === "In Stock") {
            setIsInvalidQuantity(true);
            return false;
        } else if (!values.warehouse_id) {
            setIsInvalidWarehouse(true);
            return false;
        } else {
            return true;
        }
    };

    //Function for Form Submission
    const handleFormSubmit = (event) => {
        event.preventDefault();

        //Form validation check
        if (!isFormValid()) {
            return console.error("Form is not valid");
        }

        if (values.status === "Out of Stock") {
            values.quantity = 0;
        }

        values.quantity = parseInt(values.quantity);

        axios
            .post(`${apiUrl}/inventories`, values)
            .then(() => {
                navigate("/inventory");
                alert(`${values.item_name} successfully created!`);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //When cancel button clicked, navigate back home
    const handleCancel = () => navigate("/inventory");

    return (
        <section className="container">
            <section className="new-inventory">
                <div className="new-inventory__header">
                    <Link className="new-inventory__back-link" to="/inventory">
                        <img className="new-inventory__back" src={arrowBack} alt="back arrow" />
                    </Link>
                    <h1 className="new-inventory__title">Add New Inventory Item</h1>
                </div>
                <form
                    className="new-inventory__form"
                    action="submit"
                    onSubmit={(event) => handleFormSubmit(event)}
                >
                    <div className="new-inventory__item-details">
                        <h2 className="new-inventory__sub-header">Item Details</h2>
                        <label className="new-inventory__label" htmlFor="item_name">
                            Item Name
                        </label>
                        <input
                            className={`new-inventory__input ${
                                !isInvalidName ? "" : "new-inventory__input--error"
                            }`}
                            type="text"
                            name="item_name"
                            id="item_name"
                            placeholder="Item Name"
                            onChange={handleInputChange}
                        />
                        {isInvalidName && <ErrorMsg />}
                        <label className="new-inventory__label" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className={`new-inventory__description ${
                                !isInvalidDesc ? "" : "new-inventory__description--error"
                            }`}
                            name="description"
                            id="description"
                            placeholder="Please enter a brief description..."
                            onChange={handleInputChange}
                        ></textarea>
                        {isInvalidDesc && <ErrorMsg />}
                        <label className="new-inventory__label" htmlFor="category">
                            Category
                        </label>
                        <select
                            className={`new-inventory__dropdown ${
                                !isInvalidCategory ? "" : "new-inventory__dropdown--error"
                            }`}
                            name="category"
                            id="category"
                            onChange={handleInputChange}
                        >
                            <option value="">Please select</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Gear">Gear</option>
                            <option value="Health">Health</option>
                            <option value="Apparel">Apparel</option>
                        </select>
                        {isInvalidCategory && <ErrorMsg />}
                    </div>
                    <div className="new-inventory__item-avail">
                        <h2 className="new-inventory__sub-header">Item Availability</h2>
                        <div className="new-inventory__status-container">
                            <legend className="new-inventory__label new-inventory__label--status">
                                Status
                            </legend>
                            <div className="new-inventory__radio">
                                <input
                                    className="new-inventory__status-input"
                                    type="radio"
                                    name="status"
                                    id="inStock"
                                    value="In Stock"
                                    onChange={handleInputChange}
                                />
                                <label
                                    className={`new-inventory__status-label ${
                                        !isInvalidStatus ? "" : "new-inventory__status-label--error"
                                    }`}
                                    htmlFor="inStock"
                                >
                                    In Stock
                                </label>
                            </div>
                            <div className="new-inventory__radio">
                                <input
                                    className="new-inventory__status-input"
                                    type="radio"
                                    name="status"
                                    id="outOfStock"
                                    value="Out of Stock"
                                    onChange={handleInputChange}
                                />
                                <label
                                    className={`new-inventory__status-label ${
                                        !isInvalidStatus ? "" : "new-inventory__status-label--error"
                                    }`}
                                    htmlFor="outOfStock"
                                >
                                    Out of Stock
                                </label>
                            </div>
                        </div>
                        {isInvalidStatus && <ErrorMsg />}
                        {/* Only renders quantity input on initial load or if status is set to In Stock */}
                        {values.status === "Out of Stock" ? (
                            ""
                        ) : (
                            <>
                                <label htmlFor="quantity" className="new-inventory__label">
                                    Quantity
                                </label>
                                <input
                                    className={`new-inventory__input new-inventory__input--quantity ${
                                        !isInvalidQuantity ? "" : "new-inventory__input--error"
                                    }`}
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    onChange={handleInputChange}
                                    value={values.quantity}
                                />
                                {isInvalidQuantity && <ErrorMsg isInvalidQuantity={isInvalidQuantity} />}
                            </>
                        )}

                        <label className="new-inventory__label" htmlFor="warehouse_id">
                            Warehouse
                        </label>
                        <select
                            className={`new-inventory__dropdown ${
                                !isInvalidWarehouse ? "" : "new-inventory__dropdown--error"
                            }`}
                            name="warehouse_id"
                            id="warehouse_id"
                            onChange={handleInputChange}
                        >
                            <option value="">Please select</option>
                            {warehouses.map((warehouse) => {
                                return (
                                    <option key={warehouse.id} value={warehouse.id}>
                                        {warehouse.warehouse_name}
                                    </option>
                                );
                            })}
                        </select>
                        {isInvalidWarehouse && <ErrorMsg />}
                    </div>
                    <div className="new-inventory__form-actions">
                        <button
                            onClick={handleCancel}
                            className="new-inventory__btn new-inventory__btn--cancel"
                            type="button"
                        >
                            Cancel
                        </button>
                        <button className="new-inventory__btn new-inventory__btn--add" type="submit">
                            + Add Item
                        </button>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default AddInventoryPage;
