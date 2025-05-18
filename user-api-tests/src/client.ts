// Axios/Fetch client

import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

export const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL || "https://dummyapi.io/api", // temporary, will be mocked later
  headers: {
    "Content-Type": "application/json",
  },
});

//Required if token needs to setup
export const setAuthToken = (token: string) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};