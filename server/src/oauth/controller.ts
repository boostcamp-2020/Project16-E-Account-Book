import 'dotenv/config';
import * as Service from './service';
import { InsertUser, OauthUserData } from '../interface/user';

export const oauth = async (ctx: any) => {
  const { code, site, state } = ctx.request.body;

  let client_id: string = '';
  let client_secret: string = '';
  let token_url: string = '';
  let user_url: string = '';
  let option: any = {};
  let token_type: string = '';
  let method_type: string = '';

  switch (site) {
    case 'naver':
      client_id = process.env.NAVER_CLIENT_ID as string;
      client_secret = process.env.NAVER_CLIENT_SECRET as string;
      token_url = process.env.NAVER_TOKEN_URL as string;
      user_url = process.env.NAVER_USER_URL as string;
      token_type = 'Bearer';
      method_type = 'get';
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
      token_type = 'token';
      method_type = 'post';
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

  const token = await Service.getAccessToken(token_url, option, method_type);

  const data = await Service.getOAuthUserData(user_url, token, token_type);

  const userData: InsertUser = {
    pid: data.id,
    email: data.email,
    name: data.name,
    region: 'korea',
    picture: data.avatar_url,
    color: '#123123',
    isSunday: true,
    oAuthOrigin: site,
  };

  let userId = await Service.findUser(userData);

  if (!userId) {
    userId = await Service.insertUser(userData);
    await Service.createPrivateAccountbook(userId);
    await Service.createBasePayment(userId);
  }

  data.uid = userId;

  const jwtToken = Service.createJWTtoken(data, site);

  ctx.body = jwtToken;
};

export const testAccount = async (ctx: any) => {
  const { id } = ctx.params;
  const testAcount: any = JSON.parse(process.env.TEST_ACCOUNT as string);
  const data: OauthUserData = {
    id: testAcount.list[id - 1].id,
    uid: testAcount.list[id - 1].uid,
  };

  const jwtToken = Service.createJWTtoken(data, 'github');
  ctx.body = jwtToken;
};
