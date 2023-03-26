import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './InventoryItem.scss';
import iconReturn from '../../assets/icons/arrow_back-24px.svg';

const apiUrl = 'http://localhost:5005';

function InventoryItem() {
    const [selectedInventory, setSelectedInventory] = useState({});
    return (
        <div className='inventory-item'>
            <div>
                <div class='warehouse-header'>
                    <div class='warehouse-header__title'>
                        <button class='warehouse-header__comeback'>
                            <img src={iconReturn} alt='back' />
                        </button>
                        <h1 class='warehouse-header__text'>Televisor</h1>
                    </div>
                    <button class='warehouse-header__button' data-label='Edit'></button>
                </div>

                <section className='details-grid'>
                    <div className='grid-item description'>
                        <h4 className='grid-item__title'>item description:</h4>
                        <p className='grid-item__text'>This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                    </div>
                    <div className='grid-item category'>
                        <h4 className='grid-item__title'>Category:</h4>
                        <p className='grid-item__text'>Electrics</p>
                    </div>
                    <div className='grid-item status'>
                        <h4 className='grid-item__title'>Status:</h4>
                        <p className='grid-item__text'>
                            {selectedInventory.status === 'success' ? (
                                <span className='grid-item__text--success'>{selectedInventory.status}</span>
                            ) : (
                                <span className='grid-item__text--failed'>{selectedInventory.status}</span>
                            )}
                        </p>
                    </div>
                    <div className='grid-item quantity'>
                        <h4 className='grid-item__title'>Quantity:</h4>
                        <p className='grid-item__text'>500</p>
                    </div>
                    <div className='grid-item warehouse'>
                        <h4 className='grid-item__title'>Warehouse:</h4>
                        <p className='grid-item__text'>Manhattan</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default InventoryItem;
