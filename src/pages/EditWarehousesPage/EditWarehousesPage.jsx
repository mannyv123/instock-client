<<<<<<< HEAD
import React from 'react'
import "./EditWarehousesPage.scss";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

function EditWarehousesPage() {
    const api_url = "http://localhost:8000";

    const { id } = useParams();
    const navigate = useNavigate();
    const [warehouse, setWarehouse] = useState(initialValues);
    const [isError, setIsError] = useState(false);
  
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
  
    const getWarehouseDetails = useCallback(
        (id) => {
          if (id) {
            axios.get(`${api_url}/api/warehouses/${id}`).then((response) => {
              setWarehouse(response.data);
            });
          }
        },
        [id]
      );

      useEffect(() => {
        getWarehouseDetails(id);
      }, [getWarehouseDetails]);


    async function putUpdatedWarehouse() {
      try {
        const response = await axios.put(`${api_url}/api/warehouses/${id}`, warehouse);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }


  return (
    <div>
        <section className="container">
=======
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
// GJ's work
import "./EditWarehousesPage.scss";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../App";
import { useEffect, useCallback } from "react";

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

function WarehousesEdit() {
  const { id } = useParams();
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

  //   This populates the form
  const getWarehouseDetails = useCallback(
    async (id) => {
      try {
        if (id) {
          const response = await axios.get(`${apiUrl}/warehouses/${id}`);
          setWarehouse(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [id]
  );

  useEffect(() => {
    getWarehouseDetails(id);
  }, [getWarehouseDetails]);

  function handleSubmit(event) {
    event.preventDefault();
    let isError = false;
    const re_email = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}"); // matches w something@something.com
    const re_phone = new RegExp("/*"); // matches w 1231231234

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
    if (
      warehouse.contact_phone === "" ||
      !re_phone.test(warehouse.contact_phone)
    ) {
      setIsErrorContactPhone(true);
      isError = true;
    }
    if (
      warehouse.contact_email === "" ||
      !re_email.test(warehouse.contact_email)
    ) {
      setIsErrorContactEmail(true);
      isError = true;
    }

    if (isError) {
      alert("error!");
    } else {
      editNewWarehouse();
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

  async function editNewWarehouse() {
    try {
      const response = await axios.put(`${apiUrl}/warehouses/${id}`, warehouse);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
>>>>>>> develop
        <form className="content" onSubmit={handleSubmit}>
          <div className="content__sub-container">
            <a className="content__arrow-back" onClick={handleOnBack}>
              <span className="content__arrow-back--icon"></span>
            </a>
            <h1 className="content__header">Edit Warehouse</h1>
          </div>
          <div className="content__container">
            <div className="content__details-container">
              <div className="content__input-container">
                <h2 className="content__title">Warehouse Details</h2>
<<<<<<< HEAD
                <h3 className="content__input-label">Warehouse Name</h3>
                <input
                  name="warehouse_name"
                  onChange={handleWarehouseOnChange}
                  className={`content__input ${isError ? "error-state" : ""}`}
=======
                <h3 className="content__input-label content__input-label--first">
                  Warehouse Name
                </h3>
                <input
                  name="warehouse_name"
                  onChange={handleWarehouseOnChange}
                  className={`content__input-txt ${
                    isErrorWarehouseName ? "error-state" : ""
                  }`}
>>>>>>> develop
                  type="text"
                  value={warehouse.warehouse_name}
                  placeholder="Warehouse Name"
                />
<<<<<<< HEAD
=======
                {isErrorWarehouseName && <ErrorMsg />}
>>>>>>> develop
                <h3 className="content__input-label">Street Address</h3>
                <input
                  name="address"
                  onChange={handleWarehouseOnChange}
<<<<<<< HEAD
                  className={`content__input ${isError ? "error-state" : ""}`}
=======
                  className={`content__input-txt ${
                    isErrorAddress ? "error-state" : ""
                  }`}
>>>>>>> develop
                  type="text"
                  value={warehouse.address}
                  placeholder="Street Address"
                />
<<<<<<< HEAD
=======
                {isErrorAddress && <ErrorMsg />}
>>>>>>> develop
                <h3 className="content__input-label">City</h3>
                <input
                  name="city"
                  onChange={handleWarehouseOnChange}
<<<<<<< HEAD
                  className={`content__input ${isError ? "error-state" : ""}`}
=======
                  className={`content__input-txt ${
                    isErrorCity ? "error-state" : ""
                  }`}
>>>>>>> develop
                  type="text"
                  value={warehouse.city}
                  placeholder="City"
                />
<<<<<<< HEAD
=======
                {isErrorCity && <ErrorMsg />}
>>>>>>> develop
                <h3 className="content__input-label">Country</h3>
                <input
                  name="country"
                  onChange={handleWarehouseOnChange}
<<<<<<< HEAD
                  className={`content__input ${isError ? "error-state" : ""}`}
=======
                  className={`content__input-txt ${
                    isErrorCountry ? "error-state" : ""
                  }`}
>>>>>>> develop
                  type="text"
                  value={warehouse.country}
                  placeholder="Country"
                />
<<<<<<< HEAD
=======
                {isErrorCountry && <ErrorMsg />}
>>>>>>> develop
              </div>
            </div>

            <div className="content__details-container">
              <h2 className="content__title">Contact Details</h2>
<<<<<<< HEAD
              <h3 className="content__input-label">Contact Name</h3>
              <input
                name="contact_name"
                onChange={handleWarehouseOnChange}
                className={`content__input ${isError ? "error-state" : ""}`}
=======
              <h3 className="content__input-label content__input-label--first">
                Contact Name
              </h3>
              <input
                name="contact_name"
                onChange={handleWarehouseOnChange}
                className={`content__input-txt ${
                  isErrorContactName ? "error-state" : ""
                }`}
>>>>>>> develop
                type="text"
                value={warehouse.contact_name}
                placeholder="Contact Name"
              />
<<<<<<< HEAD
=======
              {isErrorContactName && <ErrorMsg />}
>>>>>>> develop
              <h3 className="content__input-label">Position</h3>
              <input
                name="contact_position"
                onChange={handleWarehouseOnChange}
<<<<<<< HEAD
                className={`content__input ${isError ? "error-state" : ""}`}
=======
                className={`content__input-txt ${
                  isErrorContactPosition ? "error-state" : ""
                }`}
>>>>>>> develop
                type="text"
                value={warehouse.contact_position}
                placeholder="Position"
              />
<<<<<<< HEAD
=======
              {isErrorContactPosition && <ErrorMsg />}
>>>>>>> develop
              <h3 className="content__input-label">Phone Number</h3>
              <input
                name="contact_phone"
                onChange={handleWarehouseOnChange}
<<<<<<< HEAD
                className={`content__input ${isError ? "error-state" : ""}`}
=======
                className={`content__input-txt ${
                  isErrorContactPhone ? "error-state" : ""
                }`}
>>>>>>> develop
                type="text"
                value={warehouse.contact_phone}
                placeholder="Phone Number"
              />
<<<<<<< HEAD
=======
              {isErrorContactPhone && <ErrorMsg />}
>>>>>>> develop
              <h3 className="content__input-label">Email</h3>
              <input
                name="contact_email"
                onChange={handleWarehouseOnChange}
<<<<<<< HEAD
                className={`content__input ${isError ? "error-state" : ""}`}
=======
                className={`content__input-txt ${
                  isErrorContactEmail ? "error-state" : ""
                }`}
>>>>>>> develop
                type="text"
                value={warehouse.contact_email}
                placeholder="Email"
              />
<<<<<<< HEAD
=======
              {isErrorContactEmail && <ErrorMsg />}
>>>>>>> develop
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
<<<<<<< HEAD
    </div>
  )
}

export default EditWarehousesPage
=======
    </>
  );
}

export default WarehousesEdit;
>>>>>>> develop
