import Koa, { Context } from 'koa';
import 'dotenv/config';

const Router = require('@koa/router');
const axios = require('axios').default;
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');

const router = new Router();

const app = new Koa();

app.listen(3000);
app.use(bodyParser());

router.get('/callback', async (ctx: Context) => {
  const { code } = ctx.query;

  const response = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  );

  const token = response.data.access_token;

  const { data } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const accessToken = jwt.sign({ login: data.login, id: data.id }, 'SECRET_KEY', {
    expiresIn: '1d',
  });
  ctx.cookies.set('jwt', accessToken);
  ctx.redirect(process.env.LOGIN_SUCCESS_URL as string);
});
app.use(router.routes());
