// import DeleteModal from "../../components/DeleteModal/DeleteModal";
import './Warehouses.scss';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import WarehouseBody from '../../components/WarehouseBody/WarehouseBody';

function Warehouses() {
    return (
        //    Felipe's code
        <div className='container'>
            <SearchHeader title='Inventory' />
            <WarehouseBody />
        </div>
    );
}

export default Warehouses;
