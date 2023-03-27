import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './InventoryItem.scss';
import iconReturn from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';

const apiUrl = 'http://localhost:5005/api';

function InventoryItem() {
     const [selectedInventory, setSelectedInventory] = useState([]);
     const [warehouse] = useState({});
     const { id } = useParams();

     useEffect(() => {
          getInventoryItem();
     }, []);

     function getInventoryItem() {
          axios.get(`${apiUrl}/inventories/${id}`)
               .then((response) => {
                    setSelectedInventory(response.data);
                    console.log(response.data);
               })
               .catch((error) => {
                    console.log(error);
               });
     }

     return (
          <div className='container'>
               <div className='inventory-item'>
                    <div>
                         <div className='warehouse-header'>
                              <div className='warehouse-header__title'>
                                   <Link to={`/inventory/`} className='warehouse-header__comeback'>
                                        <img src={iconReturn} alt='back to inventory' />
                                   </Link>
                                   <h1 className='warehouse-header__text'>{selectedInventory.length > 0 && selectedInventory[0].item_name}</h1>
                              </div>
                              <Link to={`/warehouse/${warehouse.id}/edit`} className='warehouse-header__button' data-label='Edit'></Link>
                         </div>
                         {selectedInventory[0] && (
                              <section className='details-grid' key={InventoryItem}>
                                   <div className='grid-item description'>
                                        <h4 className='grid-item__title'>item description:</h4>
                                        <p className='grid-item__text'>{selectedInventory[0].description}</p>
                                   </div>
                                   <div className='grid-item category'>
                                        <h4 className='grid-item__title'>Category:</h4>
                                        <p className='grid-item__text'>{selectedInventory[0].category}</p>
                                   </div>
                                   <div className='grid-item status'>
                                        <h4 className='grid-item__title'>Status:</h4>
                                        <p className='grid-item__text'>
                                             {selectedInventory[0].status === 'In Stock' ? (
                                                  <span className='grid-item__text--success'>{selectedInventory[0].status}</span>
                                             ) : (
                                                  <span className='grid-item__text--failed'>{selectedInventory[0].status}</span>
                                             )}
                                        </p>
                                   </div>
                                   <div className='grid-item quantity'>
                                        <h4 className='grid-item__title'>Quantity:</h4>
                                        <p className='grid-item__text'>{selectedInventory[0].quantity}</p>
                                   </div>
                                   <div className='grid-item warehouse'>
                                        <h4 className='grid-item__title'>Warehouse:</h4>
                                        <p className='grid-item__text'>{selectedInventory[0].warehouse_id}</p>
                                   </div>
                              </section>
                         )}
                    </div>
               </div>
          </div>
     );
}

export default InventoryItem;
