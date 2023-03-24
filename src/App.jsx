import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Warehouses />} />
          <Route path="/warehouses" element={<Warehouses />} />
          {/* added by GJ */}
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path='/inventory/:id' element={<InventoryItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
