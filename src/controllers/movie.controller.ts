import { NextFunction, Request, Response, query } from "express";

import { Movie } from "../models/movie.model";
import { MovieService } from "../services/movie.service";
import { GetAllMoviesOptions } from "../interface/movie.interface";

const options: GetAllMoviesOptions = {
  limit: 10,
  skip: 0,
};

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
      const page: number = parseInt(req.query.page as string, 10) || 1; // Default page to 1 if not provided
      const limit = 5; //data that are going to be fetched
      const skip = (page - 1) * limit;

      let movies;
      if (isNaN(page)) {
        // Fetch all movies if page is not provided or NaN
        movies = await MovieService.getAllMovies(options);
      } else {
        // Fetch movies with pagination
        movies = await MovieService.getAllMovies({ limit, skip });
      }

      res.json({ movies, totalResults: movies.length });
    } catch (e) {
      next(e);
    }
  }

  static async getSingleMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.json({ msg: `No movie with the id of ${id} found` });
      }
      res.json({ movie });
    } catch (error) {
      next(error);
    }
  }
}
