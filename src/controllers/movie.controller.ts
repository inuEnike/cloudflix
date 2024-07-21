import { NextFunction, Request, Response } from "express";
import { fetchFromTMDB } from "../services/movie.service";

export class Movies {
  static async trendingMovies(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await fetchFromTMDB("/3/trending/movie/day?language=en-US");
      res.status(200).json({ movies: data });
    } catch (error) {
      next(error);
    }
  }
  static async trendingMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await fetchFromTMDB("/3/trending/movie/day?language=en-US");

      const randomIndex = Math.floor(Math.random() * data.results.length);
      const fetchedSingle = data.results[randomIndex];
      res.status(200).json({ content: fetchedSingle });
    } catch (error) {
      next(error);
    }
  }

  static async movieTrailer(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const data = await fetchFromTMDB(`/3/movie/${id}/videos?language=en-US`);
      res.status(200).json({ movie: data });
    } catch (error) {
      next(error);
    }
  }

  static async singleMovie(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const data = await fetchFromTMDB(`/3/movie/${id}?language=en-US`);
      res.status(200).json({ movie: data });
    } catch (error) {
      next(error);
    }
  }
  static async similarMovies(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const data = await fetchFromTMDB(
        `/3/movie/${id}/similar?language=en-US&page=1S`
      );
      res.status(200).json({ movie: data });
    } catch (error) {
      next(error);
    }
  }
  static async recomendations(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const data = await fetchFromTMDB(
        `/3/movie/${id}/recommendations?language=en-US`
      );
      res.status(200).json({ movie: data });
    } catch (error) {
      next(error);
    }
  }

  static async search(req: Request, res: Response, next: NextFunction) {
    const { query } = req.params;
    try {
      const data = await fetchFromTMDB(
        `/3/search/movie?query=${query}&include_adult=true&language=en-US`
      );
      res.status(200).json({ movie: data });
    } catch (error) {
      next(error);
    }
  }
}
