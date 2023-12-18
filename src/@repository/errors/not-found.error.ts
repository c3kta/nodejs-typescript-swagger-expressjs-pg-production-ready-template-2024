import { ResponseError } from '@repository/errors/response.error';

export class NotFoundError extends ResponseError {
  constructor(message?: string) {
    super({ status: 404, message: message ?? 'Not found' });
  }
}
