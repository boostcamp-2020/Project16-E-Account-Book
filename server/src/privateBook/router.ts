import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.post('/transaction/post', Controller.createTransaction);

export default router;
