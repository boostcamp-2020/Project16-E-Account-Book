import { Context } from 'koa';
import 'dotenv/config';
import * as Service from './service';
import { OauthOption, InsertUser } from '../interface/user';

const github = async (ctx: Context) => {
  const { code } = ctx.query;
  const NEW_ACCOUNT = 0;

  const option: OauthOption = {
    code,
    client_id: process.env.GITHUB_CLIENT_ID as string,
    client_secret: process.env.GITHUB_CLIENT_SECRET as string,
  };

  const token = await Service.getAccessToken(process.env.GITHUB_TOKEN_URL as string, option);

  const data = await Service.getOAuthUserData(process.env.GITHUB_USER_URL as string, token);

  const jwtToken = Service.createJWTtoken(data);

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

  if ((await Service.findtUserCount(userData)) === NEW_ACCOUNT) {
    const userId = await Service.insertUser(userData);
    await Service.createPrivateAccountbook(userId);
  }

  ctx.redirect(`${process.env.LOGIN_SUCCESS_URL as string}/?token=${jwtToken}`);
};

const naver = async (ctx: Context) => {
  const { code } = ctx.query;
  const option = {
    params: {
      code,
      grant_type: 'authorization_code',
      client_id: process.env.NAVER_CLIENT_ID as string,
      client_secret: process.env.NAVER_CLIENT_SECRET as string,
      state: 'abc',
    },
  };
  const token = await Service.getAccessTokenNaver(process.env.NAVER_TOKEN_URL as string, option);

  const data = await Service.getOAuthUserDataNaver(process.env.NAVER_USER_URL as string, token);
  data.oAuthOrigin = 'naver';

  const jwtToken = Service.createJWTtoken(data);

  ctx.cookies.set('jwt', jwtToken);
  ctx.redirect(process.env.LOGIN_SUCCESS_URL as string);
};

export { github, naver };
