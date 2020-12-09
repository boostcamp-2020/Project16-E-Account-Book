import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/list', Controller.getSocialBooks);

router.get('/list/master', Controller.getSocialBooksMaster);

router.get('/transaction/:bookId/:date', Controller.getDailyTransaction);

router.post('/transaction', Controller.createTransaction);

router.get('/statistic/category/:bookId/:year/:month', Controller.getCategoryStatistic);

router.get('/statistics/monthly/:bookId', Controller.getPastFourMonthStatistics);


export default router;
