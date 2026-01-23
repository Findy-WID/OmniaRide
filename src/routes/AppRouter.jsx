import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Driver from "../pages/Driver";
import History from "../pages/History";
import Home from "../pages/Home";
import Trip from "../pages/Trip";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/history" element={<History />} />
      <Route path="/trip" element={<Trip />} />
    </Routes>
  );
}
