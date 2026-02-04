import axiosInstance from "../../services/axiosInstance";
import { appendHotels, setLoading } from "./hotelSlice";


// export const fetchHotels = async (cityCode, page = 0) => {
//   const res = await axiosInstance.get(
//     `/v1/reference-data/locations/hotels/by-city`,
//     {
//       params: {
//         cityCode,
//         radius: 20,
//         // page: { offset: page * 10 },
//       },
//     }
//   );
//   return res.data.data;
// };
export const fetchHotels = async (cityCode, page = 0) => {
  const res = await axiosInstance.get(
    "/v1/reference-data/locations/hotels/by-city",
    {
      params: {
        cityCode,
        radius: 20,
      },
    }
  );

  const pageSize = 6;
  const start = page * pageSize;
  const end = start + pageSize;

  return res.data.data.slice(start, end);
};



export const loadMoreHotels = async (dispatch, page) => {
  dispatch(setLoading(true));

  try {
    const data = await fetchHotels("DEL", page);
    dispatch(appendHotels(data));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setLoading(false));
  }
};
