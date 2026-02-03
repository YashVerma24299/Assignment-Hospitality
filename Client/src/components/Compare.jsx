import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useSelector } from "react-redux";

export default function Compare() {
  const { list, compare } = useSelector(s => s.hotels);
  const data = list
  .filter(h => compare.includes(h.hotelId))
  .map(h => ({
    name: h.name,
    rating: Math.floor(Math.random() * 5) + 1
  }));
  

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line dataKey="rating" />
    </LineChart>
  );
}
