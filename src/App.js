import { Navbar } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import HeaderNavigation from "./components/HeaderNavigation";
import Home from "./components/Home";
import Login from "./components/Login";
import PowerPointPresentation from "./components/PowerPointPresentation";
import RequireAuth from "./components/RequireAuth";
import Sensors from "./components/Sensors";
import SignUp from "./components/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <HeaderNavigation></HeaderNavigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/presentation" element={<PowerPointPresentation />} />
        {/* <Route path="/sensors" element={<Sensors />} /> */}
        <Route path='/sensors' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>}>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;