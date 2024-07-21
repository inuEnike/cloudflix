import mongoose from "mongoose";
import { ENV_DATA } from "./envData";

export const connectDb = async () => {
  try {
    await mongoose.connect(ENV_DATA.DB_URI as string);
    console.info("Mongodb Fired successfully");
  } catch (e: any) {
    console.error("could not connect to the database", e.message);
    process.exit(1);
  }
};
