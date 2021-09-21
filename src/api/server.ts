import "reflect-metadata";
import { app } from "./app";
import { logger } from "./helpers/log";

app.listen(2001, () => logger.info("Server is running!"));
