import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/list', Controller.getSocialBooks);

router.get('/list/master', Controller.getSocialBooksMaster);

router.get('/list/:bookId/:date', Controller.getSocialBooksDaily);

export default router;
