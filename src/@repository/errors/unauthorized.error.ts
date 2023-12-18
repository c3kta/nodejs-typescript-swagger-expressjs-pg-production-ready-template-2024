import { ResponseError } from '@repository/errors/response.error';

export class UnauthorizedError extends ResponseError {
  constructor(message?: string) {
    super({ status: 403, message: message ?? 'Unauthorized error' });
  }
}
