import jwt from "jsonwebtoken";
import { ENV_DATA } from "./envData";
import { Response } from "express";

export const handleSession = async (userId: any, res: Response) => {
  const token = jwt.sign({ userId }, ENV_DATA.JWT_KEY as string, {
    expiresIn: "15d",
  });

  res.cookie("user", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks, make it not be accessed by JS
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: ENV_DATA.NODE_ENV !== "development",
  });

  return token;
};
