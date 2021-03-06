import { Navbar } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import HeaderNavigation from "./components/Nav/HeaderNavigation";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Sensors from "./components/Sensors/Sensors";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <HeaderNavigation></HeaderNavigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sensors" element={<Sensors />} />
      </Routes>
    </div>
  );
}

export default App;