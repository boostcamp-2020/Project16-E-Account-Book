import socialBookRouter from './socialBook/router';

const Router = require('koa-router');
const router = new Router();

router.use('/accountbook', socialBookRouter.routes());

export default router;
