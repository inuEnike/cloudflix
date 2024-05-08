import { GetAllMoviesOptions } from "../interface/movie.interface";
import { Movie } from "../models/movie.model";

export class MovieService {
  static async createMovie(movieData: any) {
    try {
      const movie = await Movie.create(movieData);
      return movie;
    } catch (error) {
      throw error;
    }
  }
  static async getAllMovies({ limit, skip }: GetAllMoviesOptions) {
    try {
      if (limit < 0) {
        const movies = await Movie.find();
        return movies;
      }
      const movie = await Movie.find().skip(skip).limit(limit);
      console.log({ movie });
      return movie;
    } catch (error: any) {
      throw error;
    }
  }
}
