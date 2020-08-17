import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionController = new ConnectionsController();
const sessionController = new SessionController();
const userController = new UserController();

routes.post('/classes', classesController.store);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionController.store);
routes.get('/connections', connectionController.index);

routes.post('/sessions', sessionController.store);

routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.get('/users/:id', userController.show);

export default routes;
