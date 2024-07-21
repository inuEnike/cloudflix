import mongoose, { Schema, model } from "mongoose";
import { IUser } from "../interface/auth.interface";

const authSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  repeatPassword: {
    type: String,
  },
  image: {
    type: String,
    default: "",
  },
});

export const Auth = model("auth", authSchema);
