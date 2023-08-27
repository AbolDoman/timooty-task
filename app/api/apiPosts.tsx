import React from "react";
import { AxiosInstance } from "./api";

export const getPosts = (callback : (isOk: boolean, data: any) => void) => {
  AxiosInstance()
    .get(`/posts`)
    .then((res) => callback(true, res))
    .catch((err) => {
      callback(false, err);
    });
};
export const getAllComments = (callback : (isOk: boolean, data: any) => void) => {
  AxiosInstance()
    .get(`/comments`)
    .then((res) => callback(true, res))
    .catch((err) => {
      callback(false, err);
    });
};