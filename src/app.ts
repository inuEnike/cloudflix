import express, {
  ErrorRequestHandler,
  Express,
  Request,
  Response,
} from "express";
import dotenv from "dotenv";
import ErrorHandler from "./middleware/error";
import movies from "./routes/movie.route";
import { notFound } from "./middleware/notFound";

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use("/movies", movies);

app.use("*", notFound.error);
app.use(ErrorHandler.handleError as ErrorRequestHandler);

export default app;
