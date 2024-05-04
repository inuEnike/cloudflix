import app from "./app";
import { config } from "./config/config";
import { connectDb } from "./utils/db";

app.listen(config.PORT, () => {
  connectDb();
  console.log(`Server Kickstarted on port ${config.PORT}`);
});
