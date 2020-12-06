import socialBookRouter from './socialBook/router';
import privateBookRouter from './privateBook/router';

const Router = require('koa-router');
const router = new Router();

router.use('/social', socialBookRouter.routes());
router.use('/private', privateBookRouter.routes());

export default router;
