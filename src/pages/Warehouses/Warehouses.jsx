import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./Warehouses.scss";

function Warehouses() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h1>Warehouse Page</h1>

            {/* --------------Manjot Code Start----------------- */}
            <button onClick={() => setIsOpen(true)}>Test DeleteModal</button>
            {isOpen && <DeleteModal setIsOpen={setIsOpen} />}
            {/* --------------Manjot Code End----------------- */}
        </div>
    );
}

export default Warehouses;
