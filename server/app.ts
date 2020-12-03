import { Context } from 'koa';
import 'dotenv/config';
import oauthRouter from './src/oauth/router';
import verifyToken from './src/middleware/verifyToken';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(oauthRouter.routes());
app.use(verifyToken);
app.listen(3000);

