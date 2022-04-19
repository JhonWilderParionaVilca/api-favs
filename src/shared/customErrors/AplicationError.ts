export class ApplicationError extends Error {
  errorType: string;
  statusCode: number;
  fn: string | undefined;

  constructor(
    message: string,
    errorType: string,
    fn?: string,
    statusCode: number = 500
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;
    this.fn = fn;
  }
}
