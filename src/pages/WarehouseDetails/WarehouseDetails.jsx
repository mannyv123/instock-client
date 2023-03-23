import "./WarehouseDetails.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WarehouseDetails() {
  const api_url = "http://localhost:8000";

  const navigate = useNavigate();

  const [warehouse, setWarehouse] = useState({});
  // This is extracting id from useParams.
  // id comes from our app.jsx under /warehouses/:id
  const { id } = useParams();
  const getWarehouseDetails = useCallback(
    (id) => {
      if (id) {
        axios.get(`${api_url}/api/warehouses/${id}`).then((response) => {
          console.log(response.data);
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
    <div>
      <div>
        <button onClick={handleOnBack}>Arrow Back</button>
        <h1>{warehouse.warehouse_name}</h1>
        <button>Edit</button>
      </div>
      {/* display flex row on first div */}
      <div>
        <div>
          <p>Warehouse Address:</p>
          <p>{warehouse.address}</p>
          <p>
            {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div>
          <p>Contact Name:</p>
          <p>{warehouse.contact_name}</p>
          <p>{warehouse.contact_position}</p>
        </div>
        <div>
          <p>Contact Information:</p>
          <p>{warehouse.contact_phone}</p>
          <p>{warehouse.contact_email}</p>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
