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

const getOauthUserData = async (url: string, token: string) => {
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

export { getAccessToken, getOauthUserData, createJWTtoken };
