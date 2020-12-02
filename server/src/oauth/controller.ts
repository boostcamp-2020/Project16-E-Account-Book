import { Context } from 'koa';
import 'dotenv/config';
import { resolve } from 'path';
import * as Service from './service';
import { OauthOption, InsertUser } from '../interface/user';

const github = async (ctx: Context) => {
  const { code } = ctx.query;

  const option: OauthOption = {
    code,
    client_id: process.env.GITHUB_CLIENT_ID as string,
    client_secret: process.env.GITHUB_CLIENT_SECRET as string,
  };

  const token = await Service.getAccessToken(process.env.GITHUB_TOKEN_URL as string, option);

  const data = await Service.getOAuthUserData(process.env.GITHUB_USER_URL as string, token);
  const site = 'github';
  const jwtToken = Service.createJWTtoken(data, site);

  const userData: InsertUser = {
    pid: data.id,
    email: data.email,
    name: data.name,
    region: 'korea',
    picture: data.avatar_url,
    color: '#123123',
    isSunday: true,
    oAuthOrigin: 'github',
  };

  if (!(await Service.findUser(userData))) {
    const userId = await Service.insertUser(userData);
    await Service.createPrivateAccountbook(userId);
  }

  ctx.redirect(`${process.env.LOGIN_SUCCESS_URL as string}/?token=${jwtToken}`);
};

const naver = async (ctx: any) => {
  const { code, site, state } = ctx.request.body;

  let client_id: string = '';
  let client_secret: string = '';
  let token_url: string = '';
  let user_url: string = '';
  let option: any = {};

  switch (site) {
    case 'naver':
      client_id = process.env.NAVER_CLIENT_ID as string;
      client_secret = process.env.NAVER_CLIENT_SECRET as string;
      token_url = process.env.NAVER_TOKEN_URL as string;
      user_url = process.env.NAVER_USER_URL as string;
      option = {
        params: {
          code,
          grant_type: 'authorization_code',
          client_id,
          client_secret,
          state,
        },
      };
      break;
    case 'github':
      client_id = process.env.GITHUB_CLIENT_ID as string;
      client_secret = process.env.GITHUB_CLIENT_SECRET as string;
      token_url = process.env.GITHUB_TOKEN_URL as string;
      user_url = process.env.GITHUB_USER_URL as string;
      option = {
        code,
        client_id,
        client_secret,
        state,
      };
      break;
    default:
      break;
  }
  const token = await Service.getAccessTokenNaver(token_url, option);

  const data = await Service.getOAuthUserDataNaver(user_url, token);

  const jwtToken = Service.createJWTtoken(data, site);

  ctx.body = jwtToken;
};

export { github, naver };
