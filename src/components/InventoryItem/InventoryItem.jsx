import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

function InventoryItem() {
    const [selectedItem, setSelectedItem] = useState({});
    const {id} = useParams();
  
    useEffect (()=> {
        if (id) {
            getInventoryItem (id);
        } 
    }, [id] );

    function getInventoryItem (id) {
        axios
            .get (`${api}/inventories/${id}`)
            .then ((res)=> {
                setSelectedItem(res.data);
            })
            .catch ((err)=> {
                console.log('err: ', err)
            })
    };

    return (
    <div className='inventory-item'>
    {Object.keys(selectedItem).length > 0 && <div>
        <div className="inventory-item__header">
            <p className="inventory-item__title">{selectedItem[0].item_name}</p>
            <button>Edit</button>
        </div>
        <div className="inventory-item__body">
            <div className="inventory-item__description">
                <p className="inventory-item__subheader">item description:</p>
                <p className="inventory-item__text">{selectedItem[0].description}</p>
                <p className="inventory-item__subheader">category:</p>
                <p className="inventory-item__text">{selectedItem[0].category}</p>
            </div>
            <div className="inventory-item__status">
            <p className="inventory-item__subheader">status:</p>
                <p className="inventory-item__text">{selectedItem[0].status}</p>
                <p className="inventory-item__subheader">warehouse:</p>
                <p className="inventory-item__text">{selectedItem[0].warehouse_id}</p>
            </div>
            <div className="inventory-item__quantity">
            <p className="inventory-item__subheader">quantity:</p>
                <p className="inventory-item__text">{selectedItem[0].quantity}</p>
            </div>
        </div>
    </div>
    }
    </div>
  )
}

export default InventoryItem