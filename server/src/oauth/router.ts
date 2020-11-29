import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/callback/github', Controller.github);

export default router;
