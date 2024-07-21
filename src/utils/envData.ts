import dotenv from "dotenv";

dotenv.config();

export const ENV_DATA = {
  TMDB_KEY: process.env.TMDB_KEY,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.CLOUD_API_KEY,
  API_SECRET: process.env.CLOUD_API_SECRET,
  PORT: process.env.PORT,
  DB_URI: process.env.MONGO_URI,
  JWT_KEY: process.env.JWT_KEY,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  NODE_ENV: process.env.NODE_ENV,
};
