import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testpage from "./Components/Testpage";
import Home from "./pages/HomePage";
import LabTechnicianPortal from "./pages/LabTechnicianPortal";
import AdminDashboard from "./pages/AdminPanel";
import LabTechnicianHome from "./pages/LabTechnicianHomePage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/lab" element={<LabTechnicianHome />} />
        <Route path="/lab/update-test" element={<LabTechnicianPortal />} />
        <Route path="/login/admin" element={<AdminDashboard />} />
        <Route path="/login/farmer" element={<div>Farmer Login</div>} />
      </Routes>
    </BrowserRouter>
  );
}
