import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/', Controller.getPayments);

export default router;
