import 'dotenv/config';
import { OauthUserData, InsertUser, SelectUser } from '../interface/user';
import sql from '../model/db';
import query from '../model/query';

const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const createJWTtoken = (data: OauthUserData, site: string) => {
  const jwtToken = jwt.sign(
    { id: data.id, oAuthOrigin: site, uid: data.uid },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  );
  return jwtToken;
};

const getAccessToken = async (url: string, option: any, method: string) => {
  if (method === 'get') {
    const response = await axios.get(url, option, {
      headers: {
        accept: 'application/json',
      },
    });
    return response.data.access_token;
  }
  const response = await axios.post(url, option, {
    headers: {
      accept: 'application/json',
    },
  });
  return response.data.access_token;
};

const getOAuthUserData = async (url: string, token: string, tokenType: string) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });
  return tokenType === 'token' ? data : data.response;
};

const insertUser = async (props: InsertUser) => {
  const { pid, email, name, region, color, isSunday, oAuthOrigin } = props;
  let { picture } = props;
  if (!picture) {
    picture = process.env.DEFAULT_IMG;
  }
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
  return result === undefined ? undefined : result.id;
};

const createPrivateAccountbook = async (userId: number) => {
  await sql(query.CREATE_PRIVATE_BOOK, [userId, '내 가계부', '', '#F4C239']);
};

export {
  createJWTtoken,
  getAccessToken,
  getOAuthUserData,
  insertUser,
  findUser,
  createPrivateAccountbook,
};
