import { ResponseError } from '@repository/errors/response.error';

export class AlreadyExistsError extends ResponseError {
  constructor(message?: string) {
    super({ status: 409, message: message ?? 'Already exists error' });
  }
}
