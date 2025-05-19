import axios from "axios";
const KEY = "xlzrSqm-ILLi7SKWnRlGSaBQGNtWz_yfFpTY7loJR2Q";

export const fetchImgs = async (query, page, signal) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${KEY}&per_page=12&orientation=landscape&query=${query}&page=${page}`,
    { signal }
  );
  return response.data;
};
