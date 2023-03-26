import DetailsHeader from '../DetailsHeader/DetailsHeader';
import './DetailsBody.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5005/api';

function DetailsBody() {
    const [selectedInventory, setSelectedInventory] = useState({});

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSelectedWarehouse(id);
        }
    }, [id]);

    function getSelectedWarehouse(id) {
        axios
            .get(`${apiUrl}/warehouses/${id}`)
            .then((res) => {
                setSelectedInventory(res.data);
            })
            .catch((err) => {
                console.log('Error:', err);
            });
    }

    return (
        <ul className='warehouse-details'>
            <DetailsHeader />
            {selectedInventory && Object.keys(selectedInventory).length > 0 ? (
                <li className='warehouse-details__row' key={selectedInventory.id}>
                    <div className='warehouse-details__col warehouse-details__col--1' data-label='Warehouse'>
                        <Link to={`/inventory/${selectedInventory.id}`} className='warehouse-details__col--title'>
                            {selectedInventory.item_name}
                        </Link>
                    </div>
                    <div className='warehouse-details__col warehouse-details__col--2' data-label='Category'>
                        {selectedInventory.category}
                    </div>
                    <div className='warehouse-details__col warehouse-details__col--3' data-label='Status'>
                        {selectedInventory.status === 'success' ? (
                            <span className='warehouse-details__col--success'>{selectedInventory.status}</span>
                        ) : (
                            <span className='warehouse-details__col--failed'>{selectedInventory.status}</span>
                        )}
                    </div>
                    <div className='warehouse-details__col warehouse-details__col--4' data-label='Qty'>
                        {selectedInventory.quantity}
                    </div>
                    <div className='warehouse-details__col warehouse-details__col--5' data-label='Actions'>
                        <button className='warehouse-details__col--btn'>
                            <img src={deleteIcon} alt='delete' />
                        </button>
                        <button className='warehouse-details__col--btn'>
                            <img src={editIcon} alt='edit' />
                        </button>
                    </div>
                </li>
            ) : (
                <li>No Data Found</li>
            )}
        </ul>
    );
}

export default DetailsBody;
