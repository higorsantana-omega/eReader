import "reflect-metadata";
import express from "express";
import createConnectionDatabase from "./database";
import { router } from "./books.routes";

createConnectionDatabase();
const app = express();

app.use(express.json());
app.use(router)

export { app };
