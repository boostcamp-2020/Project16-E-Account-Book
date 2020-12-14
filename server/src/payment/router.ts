import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/', Controller.getUserPayments);
router.post('/', Controller.createUserPayment);

export default router;
