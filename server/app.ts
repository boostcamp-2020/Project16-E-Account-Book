import 'dotenv/config';
import oauthRouter from './src/oauth/router';
import verifyToken from './src/middleware/verifyToken';
import apiRouter from './src/router';

const Router = require('koa-router');
const router = new Router();

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(oauthRouter.routes());
app.use(router.routes());
app.use(router.allowedMethods());
router.use('/api', verifyToken, apiRouter.routes());

app.listen(3000);
