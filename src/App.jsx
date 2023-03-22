import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import WarehousesAdd from "./pages/WarehousesAdd/WarehousesAdd";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Warehouses />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/warehouses/add" element={<WarehousesAdd />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
