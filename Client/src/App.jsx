import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import { getAmadeusToken } from "./services/amadeusAuth";

export default function App() {
  useEffect(() => {
    getAmadeusToken();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
