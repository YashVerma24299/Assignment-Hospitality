import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelList from "./components/HotelList";
import Compare from "./components/Compare";
import { getAmadeusToken } from "./features/hotels/amadeusAuth";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    getAmadeusToken();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}
