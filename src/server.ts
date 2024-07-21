import app from "./app";

import { connectDb } from "./utils/db";
import { ENV_DATA } from "./utils/envData";

app.listen(ENV_DATA.PORT, () => {
  connectDb();
  console.log(`Server Kickstarted on port ${ENV_DATA.PORT}`);
});
