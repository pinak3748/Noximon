import Axios from 'axios';

import { ROUTES } from '@/constants/routes';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8001/';

export const instance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('user');
    const token = user ? JSON.parse(user).accessToken : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// TODO: Refresh access token
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message?.message;

    if (status === 401 || message?.toLowerCase().includes('expired')) {
      localStorage.removeItem('user');
      window.location.href = ROUTES.SIGN_IN;
    }

    return Promise.reject(error);
  }
);

export const unAuthInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
