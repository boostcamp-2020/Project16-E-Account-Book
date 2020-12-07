import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.post('/login', Controller.oauth);

export default router;
