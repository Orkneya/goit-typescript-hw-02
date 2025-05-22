import axios from "axios";
import { Image } from "../../type/ImageData";
// import { Image } from "../../type/imageData";
const KEY: string = "xlzrSqm-ILLi7SKWnRlGSaBQGNtWz_yfFpTY7loJR2Q";
interface fetchImgsResponse {
  results: Image[];
  totalPages: number;
}

export const fetchImgs = async (
  query: string,
  page: number,
  signal: AbortSignal | undefined
): Promise<fetchImgsResponse> => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${KEY}&per_page=12&orientation=landscape&query=${query}&page=${page}`,
    { signal }
  );
  return {
    results: response.data.results as Image[],
    totalPages: response.data.total_pages,
  };
};
