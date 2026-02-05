import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import { getAmadeusToken } from "./services/amadeusAuth";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

export default function App() {
  useEffect(() => {
    getAmadeusToken();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
