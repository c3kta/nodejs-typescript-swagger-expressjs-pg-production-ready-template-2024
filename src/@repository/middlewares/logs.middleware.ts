import { Request, Response, NextFunction } from 'express';
import logger from '@utils/logger';

export default (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'development')
    logger.info(
      `${req.method} -> ${req.url} | ${req.header('user-agent')} | ${req.ip}`,
    );
  next();
};
