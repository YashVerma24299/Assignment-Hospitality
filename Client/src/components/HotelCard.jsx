import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel, onCompare }) {
    const navigate = useNavigate();

  const handleCompare = () => {
    onCompare(hotel.hotelId);
    console.log("fghj");
    
    navigate("/compare");
  };
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{hotel.name}</h3>
      <p>{hotel.address?.cityName}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
        onClick={handleCompare}
      >
        Compare
      </button>
    </div>
  );
}
