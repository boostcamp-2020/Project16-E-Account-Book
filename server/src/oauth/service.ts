import 'dotenv/config';
import { OauthOption, OauthUserData, InsertUser, SelectUser } from '../interface/user';
import { sql } from '../model/db';
import userQuery from '../model/userQuery';
import privateBookQuery from '../model/privateBookQuery';

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
  const result = await sql(userQuery.CREATE_USER, [
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

const findtUserCount = async (props: SelectUser) => {
  const { pid, oAuthOrigin } = props;

  const result = await sql(userQuery.READ_USER_COUNT, [pid, oAuthOrigin]);
  console.log(result);
  if (result.length === 0) return 0;
  return result[0]['COUNT(*)'];
};

const createPrivateAccountbook = async (userId: number) => {
  await sql(privateBookQuery.CREATE_PRIVATE_BOOK, [userId, '내 가계부', '', '#F4C239']);
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
