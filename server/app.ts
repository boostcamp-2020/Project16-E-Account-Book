import { Context } from 'koa';
import 'dotenv/config';
import oauthRouter from './src/oauth/router';

const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const router = new Router();
const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(oauthRouter.routes());
app.use(router.routes());
app.listen(3000);
