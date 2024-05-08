import { CMovie } from "./../controllers/movie.controller";
import express, { Express, Request, Response } from "express";
import { validator } from "../middleware/validators/movie.validator";
import multer from "multer";
import { storage } from "../utils/cloudinary";
const router = express.Router();

const upload = multer({ storage });
router
  .post("/", validator.validate, upload.single("file"), CMovie.createMovie)
  .get("/", CMovie.getAllMovie)
  .get("/:id", CMovie.getSingleMovie);

export default router;
