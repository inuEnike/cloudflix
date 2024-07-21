import express, { Express, Request, Response } from "express";
import { Movies } from "../controllers/movie.controller";
import { Auth } from "../middleware/auth.middleware";

const router = express.Router();

router
  .get("/trending-movies", Auth.middleware, Movies.trendingMovies)
  .get("/trending-movie", Auth.middleware, Movies.trendingMovie)
  .get("/search/:query", Auth.middleware, Movies.search)
  .get("/:id/movie", Auth.middleware, Movies.singleMovie)
  .get("/:id/movie-trailer", Auth.middleware, Movies.movieTrailer)
  .get("/:id/similar-movie", Auth.middleware, Movies.similarMovies)
  .get("/:id/recomendations", Auth.middleware, Movies.recomendations);
export default router;
