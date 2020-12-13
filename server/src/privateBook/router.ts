import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/transaction/list/:year/:month', Controller.getTransactionList);

router.post('/transaction', Controller.createTransaction);

router.get('/statistic/category/:year/:month', Controller.getCategoryStatistic);

router.get('/statistic/weeks', Controller.getPastFiveWeekStatistic);

router.get('/analysis', Controller.getMonthAnalysis);

router.get('/statistics/monthly/', Controller.getPastFourMonthStatistics);

router.put('/transaction', Controller.updateTransaction);

export default router;
