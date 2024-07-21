import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { Auth } from "../../models/auth.model";

export class Validator {
  static async validateSignup(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password, repeatPassword } = req.body;

      if (!email || !username || !password || !repeatPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }
      if (password !== repeatPassword) {
        return res.status(400).json({ message: "Password must match" });
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if email is valid
      if (!emailRegex.test(email)) {
        return res
          .status(400)
          .json({ message: "Please provide a valid email address" });
      }

      if (password.length && repeatPassword.length < 5) {
        return res
          .status(400)
          .json({ message: "Password should not be less than 5" });
      }

      const checkUsername = await Auth.findOne({ username });
      if (checkUsername) {
        return res
          .status(400)
          .json({ message: "User with the username already exist" });
      }

      const checkEmail = await Auth.findOne({ email });
      if (checkEmail) {
        return res
          .status(400)
          .json({ message: "User with the email already exist" });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  static async validateSignin(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await Auth.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
      const compareCredentails = await bcrypt.compare(password, user.password);
      if (!compareCredentails) {
        return res.status(400).json({ message: "invalid credentials" });
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}
