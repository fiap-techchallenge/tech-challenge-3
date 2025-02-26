import axios, { type AxiosError, type AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse<{ errorcode?: string }>) => {
    if (response.data.errorcode) {
      return Promise.reject({
        makeLogout: true,
      });
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      return Promise.reject({
        ...error,
        makeLogout: true,
      });
    }
    return Promise.reject(error);
  }
);
