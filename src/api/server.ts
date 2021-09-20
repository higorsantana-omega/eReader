import "reflect-metadata";
import logSymbols from "log-symbols";
import { app } from "./app";

app.listen(2001, () => console.log(logSymbols.success, "Server is running!"));
