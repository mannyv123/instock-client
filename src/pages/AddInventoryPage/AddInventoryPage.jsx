import "./AddInventoryPage.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:5001/api";

function AddInventoryPage() {
    const [warehouses, setWarehouses] = useState([]);

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

    return (
        <section className="container">
            <section className="new-inventory">
                <div className="new-inventory__header">
                    <img className="new-inventory__back" src={arrowBack} alt="back arrow" />
                    <h1 className="new-inventory__title">Add New Inventory Item</h1>
                </div>
                <form action="submit" className="new-inventory__form">
                    <div className="new-inventory__item-details">
                        <h2 className="new-inventory__sub-header">Item Details</h2>
                        <label className="new-inventory__label" htmlFor="name">
                            Item Name
                        </label>
                        <input
                            className="new-inventory__input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Item Name"
                        />
                        <label className="new-inventory__label" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="new-inventory__description"
                            name="description"
                            id="description"
                            placeholder="Please enter a brief description..."
                        ></textarea>
                        <label className="new-inventory__label" htmlFor="category">
                            Category
                        </label>
                        <select className="new-inventory__dropdown" name="category" id="category">
                            <option value="">Please select</option>
                            <option value="accessories">Accessories</option>
                            <option value="electronics">Electronics</option>
                            <option value="gear">Gear</option>
                            <option value="health">Health</option>
                            <option value="apparel">Apparel</option>
                        </select>
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
                                    value="inStock"
                                />
                                <label htmlFor="inStock">In Stock</label>
                            </div>
                            <div className="new-inventory__radio">
                                <input
                                    className="new-inventory__status-input"
                                    type="radio"
                                    name="status"
                                    id="outOfStock"
                                    value="outOfStock"
                                />
                                <label htmlFor="outOfStock">Out of Stock</label>
                            </div>
                        </div>
                        <label htmlFor="quantity" className="new-inventory__label">
                            Quantity
                        </label>
                        <input
                            className="new-inventory__input"
                            type="number"
                            name="quantity"
                            id="quantity"
                            placeholder="0"
                        />
                        <label className="new-inventory__label" htmlFor="warehouse">
                            Warehouse
                        </label>
                        <select className="new-inventory__dropdown" name="category" id="category">
                            <option value="">Please select</option>
                            {warehouses.map((warehouse) => {
                                return (
                                    <option key={warehouse.id} value={warehouse.warehouse_name}>
                                        {warehouse.warehouse_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="new-inventory__form-actions">
                        <button className="new-inventory__btn new-inventory__btn--cancel" type="button">
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
