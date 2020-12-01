import { Context } from 'koa';

const jwt = require('jsonwebtoken');

const verifyToken = async (ctx: Context, next: any) => {
  console.log(12341234);
  const token = ctx.cookies.get('jwt');
  if (!token) ctx.redirect('/login');
  try {
    jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return next();
  } catch (err) {
    console.log(err);
    ctx.redirect('/login');
  }
};

export { verifyToken };
