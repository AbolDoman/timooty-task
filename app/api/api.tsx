import axios from "axios";

// if we dont need to x-auth-token
export const AxiosInstance = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  });

// if we needs to x-auth-token
export const AxiosInstanceWithXAuthToken = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("x-auth-token")}`,
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
