import 'dotenv/config';
import * as Interface from '../interface';
import { query } from '../model/db';
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
  data.oAuthOrigin = 'github';
  return data;
};

const createJWTtoken = (data: Interface.oauthUserData) => {
  const jwtToken = jwt.sign(
    { login: data.name, id: data.id, oAuthOrigin: data.oAuthOrigin },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  );
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
  const result = await query(syntax.insertUser, [
    pid,
    email,
    name,
    region,
    picture,
    color,
    isSunday,
    oAuthOrigin,
  ]);

  return result.insertId;
};

const findtUserCount = async (props: Interface.selectUser) => {
  const { pid, oAuthOrigin } = props;

  const result = await query(syntax.countUserByPidOrigin, [pid, oAuthOrigin]);
  if (result.length === 0) return 0;
  return result[0]['count(*)'];
};

const createPrivateAccountbook = async (userId: number) => {
  await query(syntax.createPrivateAccountbook, [userId, '내 가계부', '', '#F4C239']);
};

export {
  getAccessToken,
  getOAuthUserData,
  createJWTtoken,
  getAccessTokenNaver,
  getOAuthUserDataNaver,
  insertUser,
  findtUserCount,
  createPrivateAccountbook,
};
