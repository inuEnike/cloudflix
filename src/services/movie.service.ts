import axios from "axios";
import { ENV_DATA } from "../utils/envData";

export const fetchFromTMDB = async (uri: string) => {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ENV_DATA.TMDB_KEY}`,
      },
    };
    const { data } = await axios.get(
      `https://api.themoviedb.org${uri}`,
      options
    );
    return data;
  } catch (error: any) {
    console.log("Error fetching data", error.message);
    throw new Error(error.message);
  }
};
