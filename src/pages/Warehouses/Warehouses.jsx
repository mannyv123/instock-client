// import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./Warehouses.scss";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import WarehouseBody from "../../components/WarehouseBody/WarehouseBody";
import { useState } from "react";

function Warehouses() {
    //------------------Manjot Code Start---------------------
    const [search, setSearch] = useState("");

    //set search value based on input from search bar; search value is passed to warehouseBody via props
    const handleSearchInput = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    //------------------Manjot Code End---------------------
    return (
        //    Felipe's code
        <div className="container">
            <SearchHeader
                title="Warehouses"
                buttonLink="/warehouses/add"
                buttonTitle="+ Add New Warehouse"
                handleSearchInput={handleSearchInput}
            />
            <WarehouseBody search={search} />
        </div>
    );
}

export default Warehouses;
