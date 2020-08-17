import { Router } from 'express';
import authMiddleware from './middlewares/auth';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';

const routes = Router();
const classesController = new ClassesController();
const connectionController = new ConnectionsController();
const sessionController = new SessionController();
const userController = new UserController();

routes.post('/sessions', sessionController.store);
routes.post('/users', userController.store);

routes.use(authMiddleware);

routes.post('/classes', classesController.store);
routes.put('/classes', classesController.update);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionController.store);
routes.get('/connections', connectionController.index);

routes.put('/users', userController.update);
routes.get('/users', userController.show);

export default routes;
