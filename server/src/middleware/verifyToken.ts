import { Context } from 'koa';
import { OauthUserData } from '../interface/user';

const jwt = require('jsonwebtoken');

const verifyToken = async (ctx: Context, next: any) => {
  const token = ctx.header.token;

  ctx.type = 'application/json';
  if (token === 'undefined') {
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
    ctx.status = 401;
    return;
  }

  try {
    const decoded: OauthUserData = await jwt.verify(token, process.env.JWT_SECRET);
    ctx.userData = decoded;
    next();
  } catch (err) {
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
    ctx.status = 401;
  }
};

export default verifyToken;
