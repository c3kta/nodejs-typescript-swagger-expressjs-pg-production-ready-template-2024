import { ResponseError } from '@repository/errors/response.error';

export class ValidationError extends ResponseError {
  constructor(message?: string) {
    super({ status: 400, message: message ?? 'Validation error' });
  }
}
