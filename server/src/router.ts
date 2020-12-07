import userRouter from './user/router';
import socialBookRouter from './socialBook/router';
import privateBookRouter from './privateBook/router';
import paymentRouter from './payment/router';
import categoryRouter from './category/router';

const Router = require('koa-router');
const router = new Router();

router.use('/user', userRouter.routes());
router.use('/social', socialBookRouter.routes());
router.use('/private', privateBookRouter.routes());
router.use('/payment', paymentRouter.routes());
router.use('/category', categoryRouter.routes());

export default router;
