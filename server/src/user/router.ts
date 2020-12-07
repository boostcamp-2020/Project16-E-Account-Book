import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/name', Controller.getUserName);

export default router;
