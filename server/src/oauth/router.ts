import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

// router.get('/callback/github', Controller.github);

router.get('/callback/login', Controller.naver);

export default router;
