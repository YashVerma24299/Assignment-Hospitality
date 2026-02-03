import { useDispatch, useSelector } from "react-redux";
import { loadHotels, toggleCompare } from "../features/hotels/hotelSlice";
import HotelCard from "./HotelCard";

export default function HotelList() {
  const dispatch = useDispatch();
  const { list, page } = useSelector(s => s.hotels);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {list.map(h => (
          <HotelCard
            key={h.hotelId}
            hotel={h}
            onCompare={(id) => dispatch(toggleCompare(id))}
          />
        ))}
      </div>

      <button
        className="mt-6 bg-black text-white px-4 py-2"
        onClick={() => dispatch(loadHotels({ city: "DEL", page }))}
      >
        Load More
      </button>
    </>
  );
}
