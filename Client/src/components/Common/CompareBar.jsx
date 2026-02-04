import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CompareBar({ count }) {
  const list = useSelector((state) => state.hotels.list);
  if (count ==0 || list.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded shadow-lg">
      <Link to="/compare">
        Compare {count} hotel{count > 1  && "s"} →
      </Link>
    </div>
  );
}
