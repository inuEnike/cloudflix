import { CMovie } from "./../controllers/movie.controller";
import express, { Express, Request, Response } from "express";
import { validator } from "../middleware/validators/movie.validator";

const router = express.Router();

router
  .post("/", validator.validate, CMovie.createMovie)
  .get("/", CMovie.getAllMovie);

export default router;
