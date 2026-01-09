import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/employees/Dashboard";
import Login from "./components/auth/Login";

import { useAuth } from "./context/AuthContext";

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
