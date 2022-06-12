import { Navbar } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import HeaderNavigation from "./components/HeaderNavigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Sensors from "./components/Sensors";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <HeaderNavigation></HeaderNavigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sensors" element={<Sensors />} />
      </Routes>
    </div>
  );
}

export default App;