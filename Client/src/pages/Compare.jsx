  import { useSelector } from "react-redux";
import EmptyState from "../components/Common/EmptyState";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,  
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";

export default function Compare() {
  const { list, compare } = useSelector((state) => state.hotels);
  

  // Normalize + mock data (Ama deus does not provide ratings/prices here)
  const compareData = list
    .filter((hotel) => compare.includes(hotel.hotelId))
    .map((hotel) => ({
      name: hotel.name,
      rating: Math.floor(Math.random() * 5) + 1, // mock rating (1–5)
      price: Math.floor(Math.random() * 4000) + 2000, // mock price
    }));

  // EMPTY STATE
  if (compareData.length === 0) {
    return (
      <>
        <EmptyState text="No hotels selected for comparison." />
      </>
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-6 ">
        Hotel Comparison
      </h2>

      {/* Selected Hotels List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {compareData.map((h) => (
          <div
            key={h.name}
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <h3 className="font-semibold">{h.name}</h3>
            <p className="text-sm text-gray-500">
              Rating: {h.rating} ⭐
            </p>
            <p className="text-sm text-gray-500">
              Avg Price: ₹{h.price}
            </p>
          </div>
        ))}
      </div>

      {/* PRICE COMPARISON CHART */}
      <div className="bg-white border rounded-lg p-6 mb-10">
        <h3 className="font-semibold mb-4">
          Price Comparison
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={compareData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* RATING COMPARISON CHART */}
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-semibold mb-4">
          Rating Distribution
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={compareData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="rating" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
