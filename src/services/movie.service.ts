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
  static async getAllMovies() {
    try {
      const movie = await Movie.find({});
      return movie;
    } catch (error) {
      throw error;
    }
  }
}
