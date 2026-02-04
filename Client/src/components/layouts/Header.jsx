import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <Link to="/" className="font-bold text-xl">Hotel Compare</Link>
        <Link
          to="/compare"
          className="text-blue-600 font-medium hover:underline"
        >
          Compare
        </Link>
      </div>
    </header>
  );
}
