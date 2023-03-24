import './WarehouseHeader.scss';

function WarehouseHeader() {
    return (
        <li className='warehouse-table__header'>
            <div className='warehouse-table__col warehouse-table__col--1'>
                Warehouse
                <button className='sort'></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--2'>
                Address
                <button className='sort'></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--3'>
                Contact Name
                <button className='sort'></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--4'>
                Contact Information
                <button className='sort'></button>
            </div>
            <div className='warehouse-table__col warehouse-table__col--5'>Actions</div>
        </li>
    );
}

export default WarehouseHeader;
