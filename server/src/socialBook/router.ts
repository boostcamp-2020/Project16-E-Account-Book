import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/:bookId', Controller.getSocialBook);

router.patch('/:bookId', Controller.updateSocialBook);

router.get('/list', Controller.getSocialBooks);

router.get('/list/master', Controller.getSocialBooksMaster);

router.get('/transaction/:bookId/:date', Controller.getDailyTransaction);

router.get('/transaction/list/:accountbookId/:year/:month', Controller.getTransactionList);

router.post('/transaction', Controller.createTransaction);

router.post('/createAccountbook', Controller.createAccountbook);

router.put('/transaction', Controller.updateTransaction);

router.delete('/transaction/:id', Controller.deleteTransaction);

router.get('/invitation', Controller.getInvitation);

router.post('/invitation', Controller.inviteAccountbookUser);

router.patch('/invitation/:id', Controller.patchInvitation);

router.delete('/invitation/:id', Controller.deleteInvitation);

router.get('/invitation/waiting/:bookId', Controller.getInvitationWaitingUsers);

router.get('/statistic/category/:bookId/:year/:month', Controller.getCategoryStatistic);

router.get('/statistics/monthly/:bookId', Controller.getPastFourMonthStatistics);

router.get('/statistic/weeks/:bookId', Controller.getPastFiveWeekStatistic);

router.get('/statistic/trend/income/:bookId/:year/:month', Controller.getTrendStatisticIncome);

router.get(
  '/statistic/trend/expenditure/:bookId/:year/:month',
  Controller.getTrendStatisticExpenditure,
);

export default router;
