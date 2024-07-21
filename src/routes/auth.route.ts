import express, { Express, Request, Response } from "express";
import { Authentication } from "../controllers/auth.controller";
import { Validator } from "../middleware/validators/validator";
import { Auth } from "../middleware/auth.middleware";

const router = express.Router();

router
  .post("/signup", Validator.validateSignup, Authentication.signup)
  .post("/signin", Validator.validateSignin, Authentication.signin)
  .post("/logout", Authentication.signout);
export default router;
