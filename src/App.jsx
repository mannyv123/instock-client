import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Header from "./components/Header/Header";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Warehouses />} />
                    <Route path="/warehouses" element={<Warehouses />} />
                    <Route path="/warehouses/:id" element={<WarehouseDetails />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path='/inventory/:id' element={<InventoryItem />} />
                    <Route path="/inventory/add" element={<AddInventoryPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
