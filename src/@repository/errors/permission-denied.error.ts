import { ResponseError } from '@repository/errors/response.error';

export class PermissionDeniedError extends ResponseError {
  constructor(message?: string) {
    super({ status: 403, message: message ?? 'Permission denied error' });
  }
}
