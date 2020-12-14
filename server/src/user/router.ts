import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/info', Controller.getUserInfo);

router.get('/list/:name', Controller.getUserByName);

export default router;
