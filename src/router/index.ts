import express, { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '@repository/errors';
import logsMiddleware from '@repository/middlewares/logs.middleware';

const router = express.Router();

router.use(logsMiddleware);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundError();
});

export default router;
