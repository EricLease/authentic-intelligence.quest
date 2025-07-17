import axios, { type AxiosRequestConfig } from "axios";

const url = import.meta.env.VITE_API_URL || "/";
const port = import.meta.env.VITE_API_PORT || "";
const baseUrl = `${url?.trim()}${!!port ? `:${port?.toString().trim()}` : ""}`;
const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const axGet = (url: string, config = {}) => apiClient.get(url, config);

const axDelete = (url: string, config?: AxiosRequestConfig<any> | undefined) =>
  apiClient.delete(url, config);

const axPut = (
  url: string,
  data?: {} | undefined,
  config?: AxiosRequestConfig<{}> | undefined
) => apiClient.put(url, data, config);

const axPost = (
  url: string,
  data?: {} | undefined,
  config?: AxiosRequestConfig<{}> | undefined
) => apiClient.post(url, data, config);

export { axGet, axDelete, axPut, axPost };
