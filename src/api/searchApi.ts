import axios from 'axios';
import { Result } from 'models/search';

export const getRandomImage = async (): Promise<any[]> => {
  const params = {
    client_id: process.env.REACT_APP_KEY,
  };
  const { data } = await axios.get(`https://api.unsplash.com/photos/random`, {
    params,
  });
  console.log(data);
  return data;
};

export const getSearchImage = async (
  query: string,
  page: number,
  perPage: number
): Promise<Result> => {
  const params = {
    client_id: process.env.REACT_APP_KEY,
    query,
    page,
    per_page: perPage,
  };

  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params,
  });
  return data;
};
