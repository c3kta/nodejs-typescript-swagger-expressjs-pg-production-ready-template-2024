import { IError } from '@repository/interfaces/IError';

export class ResponseError extends Error {
  private readonly status: number = 400;

  constructor(args: IError) {
    super(args?.message);
    this.status = args?.status;
    this.message = args?.message;
  }

  public getStatus(): number {
    return this.status;
  }

  public getMessage(): string | null {
    return this.message;
  }
}
