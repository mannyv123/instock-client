import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './InventoryItem.scss';

const api = process.env.REACT_APP_API_URL;

function InventoryItem() {
    const [selectedItem, setSelectedItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getInventoryItem(id);
        }
    }, [id]);

    function getInventoryItem(id) {
        axios
            .get(`${api}/inventories/${id}`)
            .then((res) => {
                setSelectedItem(res.data);
            })
            .catch((err) => {
                console.log('err: ', err);
            });
    }

    return (
        <div className='container'>
            <div className='inventory-item'>
                {Object.keys(selectedItem).length > 0 && (
                    <div>
                        <div className='inventory-item__header'>
                            <p className='inventory-item__title'>{selectedItem[0].item_name}</p>
                            <button>Edit</button>
                        </div>
                        <section className='details-grid'>
                            <div className='grid-item description'>
                                <h4>item description:</h4>
                                <p>{selectedItem[0].description}</p>
                            </div>
                            <div className='grid-item category'>
                                <h4>category:</h4>
                                <p>{selectedItem[0].category}</p>
                            </div>
                            <div className='grid-item status'>
                                <h4>status:</h4>
                                <p>{selectedItem[0].status}</p>
                            </div>
                            <div className='grid-item quantity'>
                                <h4>quantity:</h4>
                                <p>{selectedItem[0].quantity}</p>
                            </div>
                            <div className='grid-item warehouse'>
                                <h4>warehouse:</h4>
                                <p>{selectedItem[0].warehouse_id}</p>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InventoryItem;