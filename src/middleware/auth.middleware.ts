import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { ENV_DATA } from "../utils/envData";
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export class Auth {
  static async middleware(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req?.cookies?.user || req.headers.authorization;

      if (authHeader || authHeader?.startsWith("Bearer")) {
        const token = authHeader.split(" ")[1];
        if (!token) {
          return res.json({ msg: "Unauthorized || No or invalid token" });
        }

        const decoded = jwt.verify(token, ENV_DATA.JWT_KEY as string);

        if (!decoded) {
          return res.status(404).json({ message: "Invalid of expired token" });
        }
        req.user = decoded;
        next();
      }
    } catch (error) {
      next(error);
    }
  }
}
