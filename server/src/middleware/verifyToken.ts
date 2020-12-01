import { Context } from 'koa';

const jwt = require('jsonwebtoken');

const verifyToken = async (ctx: Context, next: any) => {
  const token = ctx.params.jwt;

  ctx.type = 'application/json';
  if (token === 'undefined') {
    console.log(undefined);
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
    return;
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return next();
  } catch (err) {
    console.log(err);
    ctx.body = { link: `${process.env.LOGIN_URL as string}` };
  }
};

export { verifyToken };
