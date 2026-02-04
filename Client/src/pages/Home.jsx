import { useDispatch, useSelector } from "react-redux";
import {
  toggleCompare,
  setFilters,
  resetCompare,
} from "../features/hotels/hotelSlice";
import { loadMoreHotels } from "../features/hotels/hotelService";
import HotelGrid from "../components/hotels/HotelGrid";
import CompareBar from "../components/Common/CompareBar";
import { useState } from "react";
import SelectionField from "../components/Common/SelectionField";
import InputField from "../components/Common/InputField";
import Button from "../components/Common/Button";

export default function Home() {
  const dispatch = useDispatch();
  const { list, compare, isLoading, page, filters } = useSelector(
    (s) => s.hotels,
  );
  const [form, setForm] = useState(filters);

  const cityData = [
    { label: "Delhi", value: "DEL" },
    { label: "Mumbai", value: "BOM" },
    { label: "Jaipur", value: "JAI" },
    { label: "Bangalore", value: "BLR" },
    { label: "Hyderabad", value: "HYD" },
  ];

  const handleSearch = () => {
    dispatch(setFilters(form));
    dispatch(resetCompare());
    loadMoreHotels(dispatch, form, 0);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white border rounded-xl p-5 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <SelectionField
            label="City"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            options={cityData}
          />

          <InputField
            label="Check In"
            type="date"
            value={form.checkIn}
            onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
          />

          <InputField
            label="Check Out"
            type="date"
            value={form.checkOut}
            onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
          />

          <InputField
            label="Guests"
            type="number"
            min="1"
            placeholder="No. of guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
          />

          <div className="flex items-end">
            <Button onClick={handleSearch}
              className="bg-black text-white rounded px-6 py-2 w-full">Search
            </Button>
          </div>
        </div>
      </div>

      <HotelGrid
        hotels={list}
        loading={isLoading}
        compare={compare}
        onCompare={(id) => dispatch(toggleCompare(id))}
        onLoadMore={() => loadMoreHotels(dispatch, filters, page)}
      />

      <CompareBar count={compare.length} />
    </div>
  );
}
