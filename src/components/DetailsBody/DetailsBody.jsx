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
     //   gj added this because we need an array of inventories, not just a single inventory.
     const [inventories, setInventories] = useState([]);
     //   gj added this because we need an array of inventories, not just a single inventory.

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
                    // gj added this
                    setInventories(res.data.inventories);
               })
               .catch((err) => {
                    console.log('Error:', err);
               });
     }

     return (
          <ul className='warehouse-details'>
               <DetailsHeader />
               {/* gj changed this so if there's no inventory, it will say "no data found"
      still need to style with css. */}
               {selectedInventory && inventories && inventories.length > 0 ? (
                    // gj added this so we can loop through the inventories data,
                    // so there are individual entries for each item.
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
                                        <img src={deleteIcon} alt='delete' />
                                   </button>
                                   <button className='warehouse-details__col--btn'>
                                        <img src={editIcon} alt='edit' />
                                   </button>
                              </div>
                         </li>
                    ))
               ) : (
                    <li>No Data Found</li>
               )}
          </ul>
     );
}

export default DetailsBody;
