// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";

function App() {
    return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Warehouses />} />
                <Route path="/warehouses" element={<Warehouses />} />
                <Route path="/inventory" element={<Inventory />} />
            </Routes>
        </div>
    </BrowserRouter>
    );
}

export default App;
