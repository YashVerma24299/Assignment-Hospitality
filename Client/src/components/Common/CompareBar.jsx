import { Link } from "react-router-dom";

export default function CompareBar({ count }) {
  if (count ==1) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded shadow-lg">
      <Link to="/compare">
        Compare {count-1} hotel{count > 2  && "s"}
      </Link>
    </div>
  );
}
