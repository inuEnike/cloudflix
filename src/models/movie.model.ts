import { IMovie } from "../interface/movie.interface";
import mongoose, { Schema, Document } from "mongoose";

// Define the schema based on the IMovie interface
const movie = new Schema<IMovie>({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  released: {
    type: Date,
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  writers: {
    type: [String],
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  awards: {
    type: [String],
    required: true,
  },
  posterPath: {
    type: String,
    required: true,
  },
  type: {
    type: [String],
    required: true,
  },
});

// Define and export the Category model
export const Movie = mongoose.model("Movie", movie);
