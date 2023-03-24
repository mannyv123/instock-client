import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import Header from './components/Header/Header';
import InventoryItem from './components/InventoryItem/InventoryItem';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path='/' element={<Warehouses />} />
                    <Route path='/warehouses' element={<Warehouses />} />
                    <Route path='/inventory' element={<Inventory />} />
                    <Route path='/inventory/:id' element={<InventoryItem />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
