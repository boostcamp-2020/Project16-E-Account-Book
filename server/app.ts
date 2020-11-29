// import Koa, { Context } from 'koa';
import 'dotenv/config';
import oauthRouter from './src/oauth/router';

const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.listen(3000);
app.use(bodyParser());
app.use(oauthRouter.routes());
