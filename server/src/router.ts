import socialBookRouter from './socialBook/router';

const Router = require('koa-router');
const router = new Router();

router.use('/social', socialBookRouter.routes());

export default router;
