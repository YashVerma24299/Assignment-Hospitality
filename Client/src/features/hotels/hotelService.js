import axiosInstance from "../../services/axiosInstance";


export const fetchHotels = async (cityCode, page = 0) => {
  const res = await axiosInstance.get(
    `/v1/reference-data/locations/hotels/by-city`,
    {
      params: {
        cityCode,
        radius: 20,
        // page: { offset: page * 10 },
      },
    }
  );
  return res.data.data;
};
