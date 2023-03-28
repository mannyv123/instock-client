import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import AddWarehousesPage from "./pages/AddWarehousesPage/AddWarehousesPage";
import Inventory from "./pages/Inventory/Inventory";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import EditWarehousesPage from "./pages/EditWarehousesPage/EditWarehousesPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

//api url
export const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    {/* Felipe's work below */}
                    <Route path="/" element={<Warehouses />} />
                    {/* Felipe's work below */}
                    <Route path="/warehouses" element={<Warehouses />} />
                    {/* GJ's work below */}
                    <Route path="/warehouses/:id" element={<WarehouseDetails />} />
                    {/* GJ's work below */}
                    <Route path="/warehouses/add" element={<AddWarehousesPage />} />
                    {/* Seyon's work below */}
                    <Route path="/warehouses/:id/edit" element={<EditWarehousesPage />} />
                    {/* Seyon's work below */}
                    <Route path="/inventory" element={<Inventory />} />
                    {/* Felipe's work below */}
                    <Route path="/inventory/:id" element={<InventoryItem />} />
                    {/* Manjot's work below */}
                    <Route path="/inventory/add" element={<AddInventoryPage />} />
                    {/* GJ's work below */}
                    <Route path="/inventory/:id/edit" element={<EditInventoryPage />} />
                    {/* Manjot's work below */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
