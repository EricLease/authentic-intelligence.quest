import axios, {
  type AxiosRequestConfig,
  type CreateAxiosDefaults,
} from "axios";

const url = import.meta.env.VITE_API_URL || "/";
const port = import.meta.env.VITE_API_PORT || "";
const baseUrl = `${url?.trim()}${!!port ? `:${port?.toString().trim()}` : ""}`;

const baseConfig: CreateAxiosDefaults<any> = {
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
};

const apiClient = axios.create(baseConfig);

const axGet = (url: string, config?: AxiosRequestConfig<any> | undefined) =>
  apiClient.get(url, config);

const axAuthGet = (url: string, config?: AxiosRequestConfig<any> | undefined) =>
  axGet(url, addCredentials(config));

const axDelete = (url: string, config?: AxiosRequestConfig<any> | undefined) =>
  apiClient.delete(url, config);

const axAuthDelete = (
  url: string,
  config?: AxiosRequestConfig<any> | undefined
) => axDelete(url, addCredentials(config));

const axPut = (
  url: string,
  data?: {} | undefined,
  config?: AxiosRequestConfig<{}> | undefined
) => apiClient.put(url, data, config);

const axAuthPut = (
  url: string,
  data?: {} | undefined,
  config?: AxiosRequestConfig<{}> | undefined
) => axPut(url, data, addCredentials(config));

const axPost = (
  url: string,
  data?: {} | undefined,
  config?: AxiosRequestConfig<{}> | undefined
) => apiClient.post(url, data, config);

const axAuthPost = (
  url: string,
  data?: {} | undefined,
  config?: AxiosRequestConfig<{}> | undefined
) => axPost(url, data, addCredentials(config));

function addCredentials(
  config?: AxiosRequestConfig<{} | any> | undefined
): AxiosRequestConfig<{} | any> | undefined {
  const result = { withCredentials: true, ...config };

  console.log(result);

  return result;
}

export {
  axGet,
  axAuthGet,
  axDelete,
  axAuthDelete,
  axPut,
  axAuthPut,
  axPost,
  axAuthPost,
};
