import { NextFunction, Request, Response } from "express";

class ErrorHandler {
  static handleError(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    const errMessage = err.message;
    const errStatusCode = res.statusCode || 500;
    const errStatusMessage = res.statusMessage;
    const errStack = err.stack;
    const errName = err.name;

    res.status(errStatusCode).json({
      success: false,
      error: {
        name: errName,
        message: errMessage,
        statusCode: errStatusCode,
        statusMessage: errStatusMessage,
        stackTrace: errStack,
      },
    });
  }
}

export default ErrorHandler;
