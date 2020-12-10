import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/info', Controller.getUserInfo);

export default router;
