import { NextFunction, Request, Response } from "express";

import { Movie } from "../models/movie.model";
import { MovieService } from "../services/movie.service";

export class CMovie {
  static async createMovie(req: Request, res: Response, next: NextFunction) {
    const {
      title,
      year,
      rated,
      released,
      runtime,
      genre,
      director,
      writers,
      actors,
      plot,
      languages,
      country,
      awards,
      type,
    } = req.body;
    try {
      const file = req.file?.path;
      const movie = await MovieService.createMovie({
        title,
        year,
        rated,
        released,
        runtime,
        genre,
        director,
        writers,
        actors,
        plot,
        languages,
        country,
        awards,
        type,
        posterPath: file,
      });
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
