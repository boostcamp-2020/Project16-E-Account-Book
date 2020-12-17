import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/list', Controller.getSocialBooks);

router.get('/invitation', Controller.getInvitation);

router.get('/invitation/waiting/:bookId', Controller.getInvitationWaitingUsers);

router.post('/invitation', Controller.inviteAccountbookUser);

router.patch('/invitation/:id', Controller.patchInvitation);

router.delete('/invitation/:id', Controller.deleteInvitation);

router.post('/', Controller.createAccountbook);

router.get('/:bookId', Controller.getSocialBook);

router.patch('/:bookId', Controller.updateSocialBook);

router.get('/list/master', Controller.getSocialBooksMaster);

router.get('/transaction/:bookId/:date', Controller.getDailyTransaction);

router.get('/transaction/:bookId/:year/:month', Controller.getTransactionList);

router.post('/transaction', Controller.createTransaction);

router.put('/transaction', Controller.updateTransaction);

router.delete('/transaction/:id', Controller.deleteTransaction);

router.get('/statistic/category/:bookId/:year/:month', Controller.getCategoryStatistic);

router.get('/statistic/monthly/:bookId', Controller.getPastFourMonthStatistics);

router.get('/statistic/weeks/:bookId', Controller.getPastFiveWeekStatistic);

export default router;
