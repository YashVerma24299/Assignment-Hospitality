import axiosInstance from "../../services/axiosInstance";
import { appendHotels, setLoading } from "./hotelSlice";

export const fetchHotels = async (filters, page = 0) => {
  const res = await axiosInstance.get(
    "/v1/reference-data/locations/hotels/by-city",
    {
      params: {
        cityCode: filters.city,
        radius: 20,
      },
    }
  );

  const pageSize = 6;
  return res.data.data.slice(page * pageSize, (page + 1) * pageSize);
};

export const loadMoreHotels = async (dispatch, filters, page) => {
  dispatch(setLoading(true));

  try {
    const data = await fetchHotels(filters, page);
    dispatch(appendHotels(data));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setLoading(false));
  }
};
