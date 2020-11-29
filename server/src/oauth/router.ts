import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/callback/github', Controller.github);

router.get('/callback/login', Controller.naver);

// router.get('/callback/login?site=github or naver', ...)

export default router;
