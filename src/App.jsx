import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Warehouses />} />
                    <Route path='/warehouses' element={<Warehouses />} />
                    <Route path='/inventory' element={<Inventory />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
