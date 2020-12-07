import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/transactionList', Controller.getTransactionList);
router.post('/transaction', Controller.createTransaction);

export default router;
