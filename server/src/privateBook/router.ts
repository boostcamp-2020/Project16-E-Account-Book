import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/transaction/:year/:month', Controller.getTransactionList);

router.post('/transaction', Controller.createTransaction);

router.put('/transaction', Controller.updateTransaction);

router.delete('/transaction/:id', Controller.deleteTransaction);

router.get('/statistic/analysis', Controller.getMonthAnalysis);

router.get('/statistic/category/:year/:month', Controller.getCategoryStatistic);

router.get('/statistic/weeks', Controller.getPastFiveWeekStatistic);

router.get('/statistic/monthly/', Controller.getPastFourMonthStatistics);

router.get('/statistic/trend/income/:year/:month', Controller.getTrendStatisticIncome);

router.get('/statistic/trend/expenditure/:year/:month', Controller.getTrendStatisticExpenditure);

export default router;
