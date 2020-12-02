import * as Controller from './controller';
// import { verifyToken } from '../middleware/verifyToken';

const Router = require('@koa/router');

const router = new Router();
// router.get('/test/:token', verifyToken, (ctx: any) => {
//   console.log(ctx.userData);
//   ctx.body = {};
// });
router.get('/callback/github', Controller.github);

router.post('/login', Controller.naver);

export default router;
