import "./WarehousesAdd.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function WarehousesAdd() {
  const api_url = "http://localhost:8000";

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  const [warehouse, setWarehouse] = useState({
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
  });

  function handleOnBack(event) {
    // This prevents refreshing the page when you submit something.
    event.preventDefault();
    return navigate("/");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const re_email = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}"); // matches w something@something.com
    const re_phone = new RegExp("[0-9]{3}[0-9]{3}[0-9]{4}"); // matches w 1231231234

    if (
      warehouse.warehouse_name === "" ||
      warehouse.address === "" ||
      warehouse.city === "" ||
      warehouse.country === "" ||
      warehouse.contact_name === "" ||
      warehouse.contact_position === "" ||
      warehouse.contact_phone === "" ||
      !re_phone.test(warehouse.contact_phone) ||
      warehouse.contact_email === "" ||
      !re_email.test(warehouse.contact_email)
    ) {
      setIsError(true);
      alert("error!");
    } else {
      setIsError(false);
      alert("submitted!");
      postNewWarehouse();
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
      const response = await axios.post(`${api_url}/api/warehouses`, warehouse);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={handleOnBack}>Arrow Back</button>
        <h1>Add New Warehouse</h1>
      </div>
      <div>
        <div>
          <h2>Warehouse Details</h2>
          <h3>Warehouse Name</h3>
          <input
            name="warehouse_name"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="Warehouse Name"
          />
          <h3>Street Address</h3>
          <input
            name="street_address_name"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="Street Address"
          />
          <h3>City</h3>
          <input
            name="city_name"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="City"
          />
          <h3>Country</h3>
          <input
            name="country_name"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="Country"
          />
        </div>
        <div>
          <h2>Contact Details</h2>
          <h3>Contact Name</h3>
          <input
            name="contact_name"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="Contact Name"
          />
          <h3>Position</h3>
          <input
            name="position_name"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="Position"
          />
          <h3>Phone Number</h3>
          <input
            name="phone_number"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="Phone Number"
          />
          <h3>Email</h3>
          <input
            name="email_name"
            onChange={handleWarehouseOnChange}
            className=""
            type="text"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <button>Cancel</button>
        <button type="submit">+ Add Warehouse</button>
      </div>
    </form>
  );
}

export default WarehousesAdd;
