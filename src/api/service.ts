import axios from 'axios';

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const BASE_URL = 'https://api.unsplash.com';

export const fetchPhotos = async (query: string, page: number = 1) => {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
            query,
            page,
            per_page: 20,
            client_id: API_KEY,
        },
    });
    return response.data;
};
