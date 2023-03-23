import { useState } from 'react';

// import DeleteModal from "../../components/DeleteModal/DeleteModal";
import './Warehouses.scss';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import WarehouseBody from '../../components/WarehouseBody/WarehouseBody';

function Warehouses() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        //    Felipe's code
        <div className='container'>
            <SearchHeader />
            <WarehouseBody />

            {/* --------------Manjot Code Start----------------- */}
            <button onClick={() => setIsOpen(true)}>Test DeleteModal</button>
            {isOpen && <DeleteModal setIsOpen={setIsOpen} />}
            {/* --------------Manjot Code End----------------- */}
        </div>
    );
}

export default Warehouses;
