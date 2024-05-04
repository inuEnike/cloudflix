import { NextFunction, Request, Response } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const errStatusCode = res.statusCode;
  return res.status(errStatusCode).json({
    msg: "This route does not exist",
  });
};
