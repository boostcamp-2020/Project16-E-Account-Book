import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/social', Controller.getSocialBooks);

router.get('/master', Controller.getSocialBooksMaster);

export default router;
