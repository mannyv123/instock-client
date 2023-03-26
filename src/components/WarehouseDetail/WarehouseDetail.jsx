import DetailsBody from '../DetailsBody/DetailsBody';
import './WarehouseDetail.scss';
import WarehouseInfo from '../WarehouseInfo/WarehouseInfo';

function WarehouseDetail() {
    return (
        <div className='container'>
            <WarehouseInfo />
            <DetailsBody />
        </div>
    );
}

export default WarehouseDetail;
