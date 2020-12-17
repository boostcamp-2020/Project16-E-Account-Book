import * as Controller from './controller';

const Router = require('@koa/router');

const router = new Router();

router.get('/myInfo', Controller.getMyInfo);

router.get('/list/:name', Controller.getUserByName);

export default router;
