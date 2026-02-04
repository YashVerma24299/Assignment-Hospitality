import Button from "../Common/Button";

export default function HotelCard({ hotel, onCompare, selected }) {
  return (
    <div className={`border rounded-xl p-5 transition hover:shadow-md ${
      selected ? "border-blue-600 bg-blue-50" : ""
    }`}>

      <h3 className="font-semibold text-lg mb-1">
        {hotel.name}
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        {hotel.address?.cityName}
      </p>

      <Button
        onClick={() => onCompare(hotel.hotelId)}
        className={`px-4 py-2 rounded text-sm ${
          selected
            ? "bg-green-600 hover:bg-green-700"
            : ""
        }`}
      >
        {selected ? "Selected" : "Compare"}
      </Button>
    </div>
  );
}
