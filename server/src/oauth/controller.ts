import { Context } from 'koa';
import 'dotenv/config';
import * as Service from './service';
import * as Interface from '../interface';

const github = async (ctx: Context) => {
  const { code } = ctx.query;

  const option: Interface.oauthOption = {
    code,
    client_id: process.env.GITHUB_CLIENT_ID as string,
    client_secret: process.env.GITHUB_CLIENT_SECRET as string,
  };

  const token = await Service.getAccessToken(process.env.GITHUB_TOKEN_URL as string, option);

  const data = await Service.getOAuthUserData(process.env.GITHUB_USER_URL as string, token);

  const jwtToken = Service.createJWTtoken(data);

  ctx.cookies.set('jwt', jwtToken);
  ctx.redirect(process.env.LOGIN_SUCCESS_URL as string);
};

const naver = async (ctx: Context) => {
  const { code } = ctx.query;
  const option = {
    params: {
      code,
      grant_type: 'authorization_code' as string,
      client_id: process.env.NAVER_CLIENT_ID as string,
      client_secret: process.env.NAVER_CLIENT_SECRET as string,
      state: 'abc' as string,
    },
  };
  const token = await Service.getAccessTokenNaver(process.env.NAVER_TOKEN_URL as string, option);

  const data = await Service.getOAuthUserDataNaver(process.env.NAVER_USER_URL as string, token);

  console.log(data);
};

export { github, naver };
