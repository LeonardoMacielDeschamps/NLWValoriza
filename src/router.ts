import { Router } from 'express';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { ensureAdmin } from './middleware/ensureAdmin';
import { CreateUserController } from './controller/CreateUserController';
import { CreateTagController } from './controller/CreateTagController';
import { AuthenticateUserController } from './controller/AuthenticateUserController';
import { CreateComplimentController } from './controller/CreateComplimentController';
import { ListUsersController } from './controller/ListUsersController';
import { ListTagsController } from './controller/ListTagsController';
import { ListUserComplimentsReceivedController } from './controller/ListUserComplimentsReceivedController';
import { ListUserComplimentsSentController } from './controller/ListUserComplimentsSentController';

const router = Router();

router.get('/users', ensureAuthenticated, new ListUsersController().handle);
router.get('/tags', ensureAuthenticated, new ListTagsController().handle);

router.get('/compliments/received', ensureAuthenticated, new ListUserComplimentsReceivedController().handle);
router.get('/compliments/sent', ensureAuthenticated, new ListUserComplimentsSentController().handle);

router.post('/users', new CreateUserController().handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, new CreateTagController().handle);
router.post('/compliments', ensureAuthenticated, new CreateComplimentController().handle);
router.post('/authenticate', new AuthenticateUserController().handle);

export { router }