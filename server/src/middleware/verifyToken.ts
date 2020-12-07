import { Context } from 'koa';
import { OauthUserData } from '../interface/user';

const jwt = require('jsonwebtoken');

const verifyToken = async (ctx: Context, next: any) => {
  const { token } = ctx.header;

  ctx.type = 'application/json';
  if (token === 'undefined') {
    ctx.status = 401;
    ctx.redirect(process.env.LOGIN_URL as string);
    return;
  }

  try {
    const decoded: OauthUserData = await jwt.verify(token, process.env.JWT_SECRET);
    ctx.userData = decoded;
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.redirect(process.env.LOGIN_URL as string);
  }
};

export default verifyToken;
