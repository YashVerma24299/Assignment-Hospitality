import HotelCard from "./HotelCard";
import SkeletonCard from "../Skeletons/SkeletonCard";
import Button from "../Common/Button";
import Loader from "../Common/Loader";
import { useEffect, useState } from "react";

export default function HotelGrid({
  hotels,
  loading,
  onCompare,
  onLoadMore,
  compare = [],
}) {
  const [showSkeleton, setShowSkeleton] = useState(false);
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setShowSkeleton(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setShowSkeleton(false);
    }
  }, [loading]);
  return (
    <>
      {loading && !showSkeleton && <Loader />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading &&
          showSkeleton &&
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}

        {!loading &&
          hotels.map((h, i) => (
            <HotelCard
              key={`${h.hotelId}-${i}`}
              hotel={h}
              onCompare={onCompare}
              selected={compare.includes(h.hotelId)}
            />
          ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button disabled={loading} onClick={onLoadMore}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </>
  );
}
