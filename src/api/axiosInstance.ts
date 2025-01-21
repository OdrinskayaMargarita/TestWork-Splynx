import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { showErrorToasts } from "../helper";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  contentType: "application/json",
  timeout: 10000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Splynx-EA (access_token=${token})`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Client Error:", error.response.data);

      showErrorToasts(error.response.data.error.message);

      try {
        await AsyncStorage.removeItem("authToken");
      } catch (clearError) {
        console.error("Failed to clear AsyncStorage:", clearError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
