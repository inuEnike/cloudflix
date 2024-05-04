import { AppConfig } from "../interface/app.interface";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 2005;

export const config: AppConfig = {
  PORT: port,
  DB_URI: process.env.MONGO_URI as string,
};
