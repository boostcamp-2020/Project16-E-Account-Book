import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.post('/login', Controller.oauth);

router.get('/login/test/:id', Controller.testAccount);

export default router;
