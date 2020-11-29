import 'dotenv/config';
import * as Interface from '../interface';

const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const getAccessToken = async (url: string, option: Interface.oauthOption) => {
  const response = await axios.post(url, option, {
    headers: {
      accept: 'application/json',
    },
  });
  const token = response.data.access_token;
  return token;
};

const getOAuthUserData = async (url: string, token: string) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return data;
};

const createJWTtoken = (data: Interface.oauthUserData) => {
  const jwtToken = jwt.sign({ login: data.login, id: data.id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return jwtToken;
};

const getAccessTokenNaver = async (url: string, option: any) => {
  const response = await axios.get('https://nid.naver.com/oauth2.0/token', option, {
    headers: {
      accept: 'application/json',
    },
  });
  return response.data.access_token;
};

const getUserData = async (token: string) => {
  const { data } = await axios.get(`https://openapi.naver.com/v1/nid/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.response;
};

export { getAccessToken, getOAuthUserData, createJWTtoken, getAccessTokenNaver, getUserData };
