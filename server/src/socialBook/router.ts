import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/list', Controller.getSocialBooks);

router.get('/list/master', Controller.getSocialBooksMaster);

router.get('/transaction/:bookId/:date', Controller.getDailyTransaction);

router.get('/transaction/list/:accountbookId/:year/:month', Controller.getTransactionList);

router.post('/transaction', Controller.createTransaction);

router.get('/statistic/category/:bookId/:year/:month', Controller.getCategoryStatistic);

router.get('/statistics/monthly/:bookId', Controller.getPastFourMonthStatistics);

router.post('/createAccountbook', Controller.createAccountbook);

export default router;
