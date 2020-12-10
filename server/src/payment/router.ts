import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/', Controller.getUserPayments);
router.post('/', Controller.createUserPayments);

export default router;
