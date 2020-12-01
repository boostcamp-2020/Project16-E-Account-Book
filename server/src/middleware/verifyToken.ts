import { Context } from 'koa';
import * as Interface from '../interface';

const jwt = require('jsonwebtoken');

const verifyToken = async (ctx: Context, next: any) => {
  const { token } = ctx.params;

  ctx.type = 'application/json';
  if (token === 'undefined') {
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
    return;
  }

  try {
    const decoded: Interface.oauthUserData = await jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    ctx.userData = decoded;
    next();
  } catch (err) {
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
  }
};

export { verifyToken };
