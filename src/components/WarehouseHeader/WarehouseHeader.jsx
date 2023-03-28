import './WarehouseHeader.scss';
import { useState } from 'react';

function WarehouseHeader( {getWarehouses} ) {
    // diving deeper -GJ
    const [warehouseOrderBy, setWarehouseOrderBy] = useState(true);
    const [AddressOrderBy, setAddressOrderBy] = useState(true);
    const [ContactNameOrderBy, setContactNameOrderBy] = useState(true);
    const [contactInformationOrderBy, setContactInformationOrderBy] = useState(true);
    //----------------------------------------
    
    return (
        <li className='warehouse-table__header'>
            <div className='warehouse-table__col warehouse-table__col--1'>
                Warehouse
                {/* diving deeper -GJ */}
                <button className='sort' onClick={() => {
                    getWarehouses("warehouse_name", warehouseOrderBy);
                    setWarehouseOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--2'>
                Address
                {/* diving deeper -GJ */}
                <button className='sort' onClick={() => {
                    getWarehouses("address", AddressOrderBy);
                    setAddressOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--3'>
                Contact Name
                {/* diving deeper -GJ */}
                <button className='sort' onClick={() => {
                    getWarehouses("contact_name", ContactNameOrderBy);
                    setContactNameOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--4'>
                Contact Information
                {/* diving deeper -GJ */}
                <button className='sort' onClick={() => {
                    getWarehouses("contact_email", contactInformationOrderBy);
                    setContactInformationOrderBy(prevState => !prevState);
                }}></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--5'>Actions</div>
        </li>
    );
}

export default WarehouseHeader;
