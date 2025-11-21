import axios from "axios";
import { userAuth } from "../store";


export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_BASE_URL,
    withCredentials:true,
    headers: {
    'content-Type':'application/json',
    Accept:'application/json'
    }
  });


const refreshToken = async () => {
    await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/refresh`,
        {},
        {
            withCredentials: true,
        }
    );
};



api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest._isRetry) {
      try {
        originalRequest._isRetry = true;
        const headers = { ...originalRequest.headers };
              await refreshToken();
              return api.request({ ...originalRequest, headers });
          } catch (err) {
              console.error('Token refresh error', err);
              userAuth.getState().logOut();
              return Promise.reject(err);
            }
          }
          
          return Promise.reject(error);
        }
      );

