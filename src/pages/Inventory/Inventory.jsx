import './Inventory.scss';
<<<<<<< HEAD
import Footer from '../../components/Footer/Footer';
=======
import InventoryList from '../../components/InventoryList/InventoryList';
>>>>>>> develop

import axios from 'axios';
import { useEffect, useState } from 'react';

const api = process.env.REACT_APP_API_URL;

// ------JIRA TICKET #J2VT1-20 -SEYON -------------------------------------
function Inventory() {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect (()=> {
        generateInventoryItems();
    }, []);

    function generateInventoryItems () {
        axios
            .get (`${api}/inventories`)
            .then ((res)=> {
                setInventoryItems(res.data)
            })
            .catch ((err)=> {
                console.log('err: ', err)
            })
    };

// -----------------SEYON CODE END----------------------------------------


    return (
<<<<<<< HEAD
        <div>
            <h1>Inventory Page</h1>
            <Footer />
=======
        <div className='container'>
            <InventoryList inventoryItems={inventoryItems} />
>>>>>>> develop
        </div>
    );
}

export default Inventory;
