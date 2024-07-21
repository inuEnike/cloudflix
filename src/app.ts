import express, {
  ErrorRequestHandler,
  Express,
  Request,
  Response,
} from "express";

import ErrorHandler from "./middleware/error";
import movies from "./routes/movie.route";
import auth from "./routes/auth.route";
import { notFound } from "./middleware/notFound";
import cookieParser from "cookie-parser";
import { ENV_DATA } from "./utils/envData";

const app: Express = express();

app.use(express.json());
// Middleware to parse cookies
app.use(cookieParser());

app.use("/api/v1/movies", movies);
app.use("/api/v1/auth", auth);

app.use("*", notFound.error);
app.use(ErrorHandler.handleError as ErrorRequestHandler);

export default app;
