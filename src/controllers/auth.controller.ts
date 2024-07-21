import { NextFunction, Request, Response } from "express";
import { Auth } from "../models/auth.model";
import bcrypt from "bcrypt";
import { handleSession } from "../utils/sessionHandler";

export class Authentication {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);

      const user = new Auth({
        username,
        email,
        password: hashPassword,
      });
      await user.save();
      res.status(201).json({ user });
    } catch (error) {
      next(error);
    }
  }
  static async signin(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const user = await Auth.findOne({ username }).select("-password");

    // Assuming user existence and password verification is handled by middleware
    await handleSession({ username: user?.username, email: user?.email }, res);

    res.status(200).json({ message: "User logged in successfully" });
  }

  static async signout(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie("user");
      res
        .status(200)
        .json({ success: true, message: "Logged out successfully" });
    } catch (error) {
      next(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
}
