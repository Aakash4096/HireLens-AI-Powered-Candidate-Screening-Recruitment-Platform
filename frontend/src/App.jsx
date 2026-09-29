import { Routes, Route, Navigate } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminResultsPage } from "./pages/AdminResultsPage";
import { ApplicantDashboard } from "./pages/ApplicantDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/results/:jobId" element={<AdminResultsPage />} />

      <Route path="/applicant" element={<ApplicantDashboard />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
