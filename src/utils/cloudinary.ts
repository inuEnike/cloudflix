import { ENV_DATA } from "./envData";
import { CloudinaryStorage, Options } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: ENV_DATA.CLOUD_NAME,
  api_key: ENV_DATA.API_KEY,
  api_secret: ENV_DATA.API_SECRET,
});

export const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "jpeg", "png"],
  params: {
    folder: "images/movies",
  },
} as Options);
