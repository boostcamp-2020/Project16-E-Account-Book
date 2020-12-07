import axios from 'axios';

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

export const getAxios = async (api: string) => {
  const config = getConfig();
  const result = await axios.get(api, config);
  return result;
};

export const postAxios = async (api: string, data: any) => {
  const config = getConfig();
  const result = await axios.post(api, data, config);
  return result;
};
