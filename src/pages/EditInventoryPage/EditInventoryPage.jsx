// GJ's work
import "./EditInventoryPage.scss";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";

const initialValues = {
    id: "",
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
    created_at: "",
    updated_at: "",
};

function InventoryEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [inventory, setInventory] = useState(initialValues);
    const [warehouses, setWarehouses] = useState([]);
    const [isErrorItemName, setIsErrorItemName] = useState(false);
    const [isErrorDescription, setIsErrorDescription] = useState(false);
    const [isErrorCategory, setIsErrorCategory] = useState(false);
    const [isErrorStatus, setIsErrorStatus] = useState(false);
    const [isErrorQuantity, setIsErrorQuantity] = useState(false);
    const [isErrorWarehouse, setIsErrorWarehouse] = useState(false);

    const categories = ["Apparel", "Accessories", "Electronics", "Health", "Gear"];

    function handleOnBack(event) {
        event.preventDefault();
        return navigate("/inventory");
    }

    // Validation
    function handleSubmit(event) {
        event.preventDefault();
        let isError = false;

        // individual validation
        if (inventory.item_name === "") {
            setIsErrorItemName(true);
            isError = true;
        }
        if (inventory.description === "") {
            setIsErrorDescription(true);
            isError = true;
        }
        if (inventory.category === "") {
            setIsErrorCategory(true);
            isError = true;
        }
        if (inventory.status === "") {
            setIsErrorStatus(true);
            isError = true;
        }
        if (inventory.quantity === "") {
            setIsErrorQuantity(true);
            isError = true;
        }
        if (inventory.warehouse === "") {
            setIsErrorWarehouse(true);
            isError = true;
        }

        //----------------------
        if (isError) {
            alert("error!");
        } else {
            putUpdatedInventory();
            alert("submitted!");
            return navigate("/inventory");
        }
    }

    // This handles the onChange event for all inputs.
    function handleInventoryOnChange(event) {
        const { name, value } = event.target;
        setInventory({
            ...inventory,
            [name]: value,
        });
    }

    async function getWarehouses() {
        try {
            const response = await axios.get(`${apiUrl}/warehouses`);

            setWarehouses(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getInventoryDetails = useCallback(
        async (id) => {
            try {
                if (id) {
                    const response = await axios.get(`${apiUrl}/inventories/${id}`);
                    setInventory(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        },
        [id]
    );

    useEffect(() => {
        getWarehouses();
        getInventoryDetails(id);
    }, [getInventoryDetails]);

    async function putUpdatedInventory() {
        try {
            const response = await axios.put(`${apiUrl}/inventories/${id}`, inventory);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    //When cancel button clicked, navigate back home
    const handleCancel = () => navigate("/inventory");

    // If inventory id is valid, it will render everything, otherwise, it will show "Item not found"
    if (inventory) {
        return (
            <section className="container">
                <form className="content" onSubmit={handleSubmit}>
                    <div className="content__sub-container">
                        <div className="content__arrow-back" onClick={handleOnBack}>
                            <span className="content__arrow-back--icon"></span>
                        </div>
                        <h1 className="content__header">Edit Inventory Item</h1>
                    </div>
                    <div className="content__container">
                        <div className="content__details-container">
                            <div className="content__input-container">
                                <h2 className="content__title">Item Details</h2>
                                <h3 className="content__input-label">Item Name</h3>
                                <input
                                    className={`content__input ${isErrorItemName ? "error-state" : ""}`}
                                    name="item_name"
                                    onChange={handleInventoryOnChange}
                                    type="text"
                                    value={inventory.item_name}
                                    placeholder="Item Name"
                                />
                                <h3 className="content__input-label">Description</h3>
                                <textarea
                                    name="description"
                                    onChange={handleInventoryOnChange}
                                    className={`content__input content__input--textarea ${
                                        isErrorDescription ? "error-state" : ""
                                    }`}
                                    type="text"
                                    value={inventory.description}
                                    placeholder="Please enter a brief description..."
                                ></textarea>
                                <h3 className="content__input-label">Category</h3>
                                <select
                                    className={`content__input content__input--dropdown ${
                                        isErrorCategory ? "error-state" : ""
                                    }`}
                                    name="category"
                                    id="category"
                                    value={inventory.category}
                                    onChange={handleInventoryOnChange}
                                >
                                    {/* Looping through category array. for every category array data, have option tag */}
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="content__details-container">
                            <h2 className="content__title">Item Availability</h2>
                            <h3 className="content__input-label">Status</h3>
                            <div className="content__radiobox-container">
                                <div>
                                    <input
                                        className={`${isErrorStatus ? "error-state" : ""}`}
                                        type="radio"
                                        id="status"
                                        name="status"
                                        value="In Stock"
                                        onChange={handleInventoryOnChange}
                                        checked={inventory.status === "In Stock"}
                                    />
                                    <label className="content__radiobox-text" htmlFor="In Stock">
                                        In Stock
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className={`${isErrorStatus ? "error-state" : ""}`}
                                        type="radio"
                                        id="status"
                                        name="status"
                                        value="Out of Stock"
                                        onChange={handleInventoryOnChange}
                                        checked={inventory.status === "Out of Stock"}
                                    />
                                    <label className="content__radiobox-text" htmlFor="Out of Stock">
                                        Out of Stock
                                    </label>
                                </div>
                            </div>
                            {/* Instock Quantity field validation. In Stock/Out of Stock comes from Status */}
                            {inventory.status === "In Stock" && (
                                <>
                                    <h3 className="content__input-label">Quantity</h3>
                                    <input
                                        name="status"
                                        onChange={handleInventoryOnChange}
                                        className={`content__input ${isErrorQuantity ? "error-state" : ""}`}
                                        type="text"
                                        value={inventory.quantity}
                                        placeholder="Quantity"
                                    />
                                </>
                            )}
                            <h3 className="content__input-label">Warehouse</h3>
                            <select
                                className={`content__input content__input--dropdown ${
                                    isErrorWarehouse ? "error-state" : ""
                                }`}
                                name="warehouse_id"
                                id="warehouse_id"
                                onChange={handleInventoryOnChange}
                                value={inventory.warehouse_id}
                            >
                                {/* Looping through category array. for every category array data, have option tag */}
                                {warehouses.map((warehouse) => (
                                    <option key={warehouse.id} value={warehouse.id}>
                                        {warehouse.warehouse_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="content__buttons-container">
                        <button className="content__cancel" onClick={handleCancel} type="button">
                            Cancel
                        </button>
                        <button className="content__submit" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        );
    } else {
        return (
            <section className="container">
                <form className="content" onSubmit={handleSubmit}>
                    <div className="content__sub-container">
                        <div className="content__arrow-back" onClick={handleOnBack}>
                            <span className="content__arrow-back--icon"></span>
                        </div>
                        <h1 className="content__header">Item Not Found</h1>
                    </div>
                </form>
            </section>
        );
    }
}

export default InventoryEdit;
