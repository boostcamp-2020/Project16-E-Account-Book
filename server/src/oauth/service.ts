import 'dotenv/config';
import { OauthOption, OauthUserData, InsertUser, SelectUser } from '../interface/user';
import sql from '../model/db';
import query from '../model/query';

const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const getAccessToken = async (url: string, option: OauthOption) => {
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

const createJWTtoken = (data: OauthUserData) => {
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

const insertUser = async (props: InsertUser) => {
  const { pid, email, name, region, picture, color, isSunday, oAuthOrigin } = props;
  const result = await sql(query.CREATE_USER, [
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

const findUser = async (props: SelectUser) => {
  const { pid, oAuthOrigin } = props;

  const [result] = await sql(query.READ_USER, [pid, oAuthOrigin]);
  return result !== undefined;
};

const createPrivateAccountbook = async (userId: number) => {
  await sql(query.CREATE_PRIVATE_BOOK, [userId, '내 가계부', '', '#F4C239']);
};

export {
  getAccessToken,
  getOAuthUserData,
  createJWTtoken,
  getAccessTokenNaver,
  getOAuthUserDataNaver,
  insertUser,
  findUser,
  createPrivateAccountbook,
};
