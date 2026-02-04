import Button from "../Common/Button";

export default function HotelCard({ hotel, onCompare, selected  }) {
  return (
    <div className="border rounded-lg p-5 hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{hotel.name}</h3>
      <p className="text-sm text-gray-500 mb-4">
        {hotel.address?.cityName}
      </p>

      <Button
        onClick={() => onCompare(hotel.hotelId)}
        className={selected ? "bg-green-600" : ""}
      >
        {selected ? "Selected" : "Compare"}
      </Button>
    </div>
  );
}
