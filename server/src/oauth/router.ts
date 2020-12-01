import * as Controller from './controller';
import { verifyToken } from '../middleware/verifyToken';

const Router = require('@koa/router');

const router = new Router();
router.get('/test/:jwt', verifyToken, () => {
  console.log('here');
});
router.get('/callback/github', Controller.github);

router.get('/callback/login', Controller.naver);

export default router;
