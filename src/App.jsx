import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehousesAdd from "./pages/WarehousesAdd/WarehousesAdd";
import Inventory from "./pages/Inventory/Inventory";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Warehouses />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/warehouses/add" element={<WarehousesAdd />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<InventoryItem />} />
          <Route path="/inventory/add" element={<AddInventoryPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
