import { NextFunction, Request, Response } from 'express';
import logger from '@utils/logger';
import { ResponseError } from '@repository/errors';

export default (
  err: ResponseError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const sendError = (status: number, message: string) => {
    return res.status(status).json({ statusCode: status, message });
  };

  if (err instanceof ResponseError) {
    return sendError(err.getStatus(), err.getMessage());
  }

  logger.error(err);
  console.log(err);
  return sendError(500, 'Internal server error');
};
