import { Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./components/Home";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;