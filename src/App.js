
import Navbar from "./NAVBAR/Navbar"
import  "./CSS/Style.css"
import './CSS/Grievance.css'
import './CSS/Dashboard.css'

import Home from "./NAVBAR/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grievance from "./NAVBAR/Grievance";
import Status from "./NAVBAR/Status";

import Dashboard from "./NAVBAR/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="Home" element={<Home />} />
    <Route path="Dashboard" element={<Dashboard />} />
    <Route path="Grievance" element={<Grievance />} />

    <Route path="Status" element={<Status />} />
    </Routes>
    
    </BrowserRouter>

   
  );
}

export default App;
