import { useDispatch, useSelector } from "react-redux";
import {
  toggleCompare,
} from "../features/hotels/hotelSlice";

import HotelGrid from "../components/hotels/HotelGrid";
import CompareBar from "../components/Common/CompareBar";
import { useEffect } from "react";
import { loadMoreHotels } from "../features/hotels/hotelService";

export default function Home() {
  const dispatch = useDispatch();
  const { list, compare, isLoading, page } = useSelector((s) => s.hotels);

  useEffect(() => {
    loadMoreHotels(dispatch, page);
  }, []);

  return (
    <div className="p-5">
      <HotelGrid
        hotels={list}
        loading={isLoading}
        compare={compare} 
        onCompare={(id) => dispatch(toggleCompare(id))}
        onLoadMore={() => loadMoreHotels(dispatch, page)}
      />
      <CompareBar count={compare.length} />
    </div>
  );
}
