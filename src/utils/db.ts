import mongoose from "mongoose";
import { config } from "../config/config";

export const connectDb = async () => {
  try {
    await mongoose.connect(config.DB_URI);
    console.info("Mongodb Fired successfully");
  } catch (e) {
    console.error("could not connect to the database");
    throw new Error((e as Error).message);
  }
};
