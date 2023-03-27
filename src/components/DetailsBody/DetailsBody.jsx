import DetailsHeader from '../DetailsHeader/DetailsHeader';
import './DetailsBody.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../App';

function DetailsBody() {
     const [selectedInventory, setSelectedInventory] = useState({});
     const [inventories, setInventories] = useState([]);

     const { id } = useParams();

     useEffect(() => {
          if (id) {
               getSelectedWarehouse(id);
          }
     }, [id]);
     useEffect(() => {
          if (id) {
               getSelectedWarehouse(id);
          }
     }, [id]);

     function getSelectedWarehouse(id) {
          axios.get(`${apiUrl}/warehouses/${id}`)
               .then((res) => {
                    setSelectedInventory(res.data);

                    setInventories(res.data.inventories);
               })
               .catch((err) => {
                    console.log('Error:', err);
               });
     }

     return (
          <ul className='warehouse-details'>
               <DetailsHeader />
               {selectedInventory && inventories && inventories.length > 0 ? (
                    inventories.map((inventory) => (
                         <li className='warehouse-details__row' key={inventory.id}>
                              <div className='warehouse-details__col warehouse-details__col--1' data-label='Warehouse'>
                                   <Link to={`/inventory/${inventory.id}`} className='warehouse-details__col--title'>
                                        {inventory.item_name}
                                   </Link>
                              </div>
                              <div className='warehouse-details__col warehouse-details__col--2' data-label='Category'>
                                   {inventory.category}
                              </div>
                              <div className='warehouse-details__col warehouse-details__col--3' data-label='Status'>
                                   {inventory.status === 'In Stock' ? (
                                        <span className='warehouse-details__col--success'>{inventory.status}</span>
                                   ) : (
                                        <span className='warehouse-details__col--failed'>{inventory.status}</span>
                                   )}
                              </div>
                              <div className='warehouse-details__col warehouse-details__col--4' data-label='Qty'>
                                   {inventory.quantity}
                              </div>
                              <div className='warehouse-details__col warehouse-details__col--5' data-label='Actions'>
                                   <button className='warehouse-details__col--btn'>
                                        <img className='warehouse-details__col--img' src={deleteIcon} alt='delete' />
                                   </button>
                                   <button className='warehouse-details__col--btn'>
                                        <img className='warehouse-details__col--img' src={editIcon} alt='edit' />
                                   </button>
                              </div>
                         </li>
                    ))
               ) : (
                    <p className='warehouse-details__notfound'>No Data Found</p>
               )}
          </ul>
     );
}

export default DetailsBody;
