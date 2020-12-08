import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/transactionList/:accountbookId/:year/:month', Controller.getTransactionList);
router.post('/transaction', Controller.createTransaction);

export default router;
