import axios from 'axios';

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const BASE_URL = 'https://api.unsplash.com';

interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

export const fetchPhotos = async (
  query: string,
  page: number = 1,
  retries: number = 3
): Promise<UnsplashResponse> => {
  try {
    const response = await axios.get<UnsplashResponse>(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 20,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    if (retries > 0) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        console.log("Rate limit exceeded, retrying...");
        await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 2 seconds before retrying
        return fetchPhotos(query, page, retries - 1);
      }
    }

    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }

    throw new Error('Error fetching photos');
  }
};
