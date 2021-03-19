import { Router } from 'express';
import healthCheckRouter from './health-check/health-check.routes';
import userRouter from './user/user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/health-check', healthCheckRouter);

export default routes;