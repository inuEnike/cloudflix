import { NextFunction, Request, Response } from "express";

import { Movie } from "../models/movie.model";
import { MovieService } from "../services/movie.service";

export class CMovie {
  static async createMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await MovieService.createMovie(req.body);
      res.json({ movie });
    } catch (e) {
      next(e);
    }
  }
  static async getAllMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await MovieService.getAllMovies();
      res.json({ movie });
    } catch (e) {
      next(e);
    }
  }
}
