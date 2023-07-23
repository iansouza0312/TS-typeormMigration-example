import express from "express";
import cors from "cors";

import { AppDataSource } from "./data-source";
import routes from "./routes";

// Initialize typeorm
AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  return app.listen(process.env.SERVER_PORT);
});
