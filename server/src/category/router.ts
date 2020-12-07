import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/income', Controller.getIncomeCategory);

router.get('/expenditure', Controller.getExpenditureCategory);

export default router;
