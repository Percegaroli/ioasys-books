import axios from 'axios';

export const getPublicAPI = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
};
