import { Context } from 'koa';
import { OauthUserData } from '../interface/user';

const jwt = require('jsonwebtoken');

const verifyToken = async (ctx: Context, next: any) => {
  const { token } = ctx.params;

  ctx.type = 'application/json';
  if (token === 'undefined') {
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
    return;
  }

  try {
    const decoded: OauthUserData = await jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    ctx.userData = decoded;
    next();
  } catch (err) {
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
  }
};

export { verifyToken };
