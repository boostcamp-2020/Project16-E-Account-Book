import 'dotenv/config';
import * as Interface from '../interface';
import { db, query } from '../model/db';
import syntax from '../model/syntax';

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
  const jwtToken = jwt.sign({ login: data.name, id: data.id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return jwtToken;
};

const getAccessTokenNaver = async (url: string, option: any) => {
  const response = await axios.get(url, option, {
    headers: {
      accept: 'application/json',
    },
  });
  return response.data.access_token;
};

const getOAuthUserDataNaver = async (url: string, token: string) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.response;
};

const insertUser = async (props: Interface.insertUser) => {
  const { pid, email, name, region, picture, color, isSunday, oAuthOrigin } = props;
  await query(syntax.insertUser, [pid, email, name, region, picture, color, isSunday, oAuthOrigin]);
};

const findtUserCount = async (props: Interface.selectUser) => {
  const { pid, oAuthOrigin } = props;

  const result = await query(syntax.countUserByPidOrigin, [pid, oAuthOrigin]);
  return result[0]['count(*)'];
};

export {
  getAccessToken,
  getOAuthUserData,
  createJWTtoken,
  getAccessTokenNaver,
  getOAuthUserDataNaver,
  insertUser,
  findtUserCount,
};
