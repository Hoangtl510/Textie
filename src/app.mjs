import express from "express";
import authRouter from "./domain/auth/auth.routes.mjs";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/", authRouter);

export default app;
