<<<<<<< HEAD
import './Warehouses.scss';
import Footer from '../../components/Footer/Footer';

function Warehouses() {
    return (
        <div>
            <h1>Warehouse Page</h1>
            <Footer />
=======
// import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./Warehouses.scss";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import WarehouseBody from "../../components/WarehouseBody/WarehouseBody";

function Warehouses() {
    return (
        //    Felipe's code
        <div className="container">
            <SearchHeader />
            <WarehouseBody />
>>>>>>> develop
        </div>
    );
}

export default Warehouses;
