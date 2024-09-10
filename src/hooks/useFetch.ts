/** @format */

import { apiUrl, baseUrl } from "@/constants";

export const useFetch = async (path: string) => {
  try {
    const res = await fetch(baseUrl + path);
    const { data } = await res.json();
    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};
export const useFetchConfig = async (path: string) => {
  try {
    const res = await fetch(apiUrl + path);
    const { data } = await res.json();
    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};
export const useFetchFloating = async (path: string) => {
  try {
    const res = await fetch(baseUrl + path);
    const { items } = await res.json();
    return {
      items,
      error: null,
    };
  } catch (error) {
    return {
      error,
      items: null,
    };
  }
};
