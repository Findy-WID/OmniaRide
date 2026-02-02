import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Onboarding from "../pages/Onboarding";
import Tracking from "../pages/Tracking";
// import Driver from "../pages/Driver";
// import History from "../pages/History";
// import Home from "../pages/Home";


export default function AppRouter() {
  return (
    <Routes>
      {/* Public Pages */}
     {/* Unused paths  */}
      {/* <Route path="/home" element={<Home />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/history" element={<History />} /> */}

      <Route path="/" element={<LandingPage />} />
      <Route path="/track/:tripId" element={<Tracking />} />
      <Route path="/driver-onboarding" element={<Onboarding />} />
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
