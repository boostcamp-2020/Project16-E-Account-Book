/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios';

const getToken = () => {
  return localStorage.getItem('jwt');
};

const getConfig = () => {
  const token = getToken();
  const config = {
    headers: { token },
  };
  return config;
};

export const getAxios = async (api: string): Promise<AxiosResponse<any>> => {
  const config = getConfig();
  const result = await axios.get(api, config);
  return result;
};

export const getAxiosData = async (api: string) => {
  const { data } = await getAxios(api);
  return data;
};

export const postAxios = async (api: string, data: any): Promise<AxiosResponse<any>> => {
  const config = getConfig();
  const result = await axios.post(api, data, config);
  return result;
};

export const putAxios = async (api: string, data: any): Promise<AxiosResponse<any>> => {
  const config = getConfig();
  const result = await axios.put(api, data, config);
  return result;
};

export const patchAxios = async (api: string, data: any): Promise<AxiosResponse<any>> => {
  const config = getConfig();
  const result = await axios.patch(api, data, config);
  return result;
};

export const deleteAxios = async (api: string): Promise<AxiosResponse<any>> => {
  const config = getConfig();
  const result = await axios.delete(api, config);
  return result;
};
