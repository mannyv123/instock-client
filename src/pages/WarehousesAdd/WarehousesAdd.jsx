import "./WarehousesAdd.scss";
import { useNavigate } from "react-router-dom";

function WarehousesAdd() {
  const api_url = "http://localhost:8000";

  const navigate = useNavigate();

  function handleOnBack(event) {
    // This prevents refreshing the page when you submit something.
    event.preventDefault();
    return navigate("/");
  }

  return (
    <form>
      <div>
        <button onClick={handleOnBack}>Arrow Back</button>
        <h1>Add New Warehouse</h1>
      </div>
      <div>
        <div>
          <h2>Warehouse Details</h2>
          <h3>Warehouse Name</h3>
          <input className="" type="text" placeholder="Warehouse Name" />
          <h3>Street Address</h3>
          <input className="" type="text" placeholder="Street Address" />
          <h3>City</h3>
          <input className="" type="text" placeholder="City" />
          <h3>Country</h3>
          <input className="" type="text" placeholder="Country" />
        </div>
        <div>
          <h2>Contact Details</h2>
          <h3>Contact Name</h3>
          <input className="" type="text" placeholder="Contact Name" />
          <h3>Position</h3>
          <input className="" type="text" placeholder="Position" />
          <h3>Phone Number</h3>
          <input className="" type="text" placeholder="Phone Number" />
          <h3>Email</h3>
          <input className="" type="text" placeholder="Email" />
        </div>
      </div>
      <div>
        <button>Cancel</button>
        <button>+ Add Warehouse</button>
      </div>
    </form>
  );
}

export default WarehousesAdd;
