import "./InventoryEdit.scss";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialValues = {
  id: "",
  warehouse_id: "",
  item_name: "",
  description: "",
  category: "",
  status: "",
  quantity: "",
  created_at: "",
  updated_at: "",
};

function InventoryEdit() {
  const api_url = "http://localhost:8000";

  const { id } = useParams();
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(initialValues);
  const [warehouses, setWarehouses] = useState([]);
  const [isError, setIsError] = useState(false);

  const categories = [
    "Apparel",
    "Accessories",
    "Electronics",
    "Health",
    "Gear",
  ];

  function handleOnBack(event) {
    event.preventDefault();
    return navigate("/");
  }

  // Validation
  function handleSubmit(event) {
    event.preventDefault();
    if (
      inventory.warehouse_id === "" ||
      inventory.item_name === "" ||
      inventory.description === "" ||
      inventory.category === "" ||
      inventory.status === "" ||
      inventory.quantity === ""
    ) {
      setIsError(true);
      alert("error!");
    } else {
      setIsError(false);
      putUpdatedInventory();
      alert("submitted!");
      return navigate("/");
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
      const response = await axios.get(`${api_url}/api/warehouses`);

      setWarehouses(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getInventoryDetails = useCallback(
    (id) => {
      if (id) {
        axios.get(`${api_url}/api/inventories/${id}`).then((response) => {
          setInventory(response.data);
        });
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
      const response = await axios.put(
        `${api_url}/api/inventories/${id}`,
        inventory
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container">
      <form className="content" onSubmit={handleSubmit}>
        <div className="content__sub-container">
          <a className="content__arrow-back" onClick={handleOnBack}>
            <span className="content__arrow-back--icon"></span>
          </a>
          <h1 className="content__header">Edit Inventory Item</h1>
        </div>
        <div className="content__container">
          <div className="content__details-container">
            <div className="content__input-container">
              <h2 className="content__title">Item Details</h2>
              <h3 className="content__input-label">Item Name</h3>
              <input
                name="item_name"
                onChange={handleInventoryOnChange}
                className={`content__input ${isError ? "error-state" : ""}`}
                type="text"
                value={inventory.item_name}
                placeholder="Item Name"
              />
              <h3 className="content__input-label">Description</h3>
              <textarea
                name="description"
                onChange={handleInventoryOnChange}
                className={`content__input ${isError ? "error-state" : ""}`}
                type="text"
                value={inventory.description}
                placeholder="Description"
              ></textarea>
              <h3 className="content__input-label">Category</h3>
              <select
                className={` ${isError ? "error-state" : ""}`}
                name="category"
                id="category"
                defaultValue={inventory.category}
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
            <div>
              <input
                type="radio"
                id="status"
                name="status"
                value="In Stock"
                onChange={handleInventoryOnChange}
                checked={inventory.status === "In Stock"}
              />
                <label htmlFor="In Stock">In Stock</label>
              <input
                type="radio"
                id="status"
                name="status"
                value="Out of Stock"
                onChange={handleInventoryOnChange}
                checked={inventory.status === "Out of Stock"}
              />
                <label htmlFor="Out of Stock">Out of Stock</label>
            </div>
            {/* Instock Quantity field validation. In Stock/Out of Stock comes from Status */}
            {inventory.status === "In Stock" && (
              <>
                <h3 className="content__input-label">Quantity</h3>
                <input
                  name="status"
                  onChange={handleInventoryOnChange}
                  className={`content__input ${isError ? "error-state" : ""}`}
                  type="text"
                  value={inventory.quantity}
                  placeholder="Quantity"
                />
              </>
            )}
            <h3 className="content__input-label">Warehouse</h3>
            <select
              className={` ${isError ? "error-state" : ""}`}
              name="warehouse_id"
              id="warehouse_id"
              onChange={handleInventoryOnChange}
              defaultValue={inventory.warehouse_id}
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
          <button className="content__cancel">Cancel</button>
          <button className="content__submit" type="submit">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default InventoryEdit;
