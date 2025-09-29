import express from "express";
import authRouter from "./domain/auth/auth.routes.mjs";
import userRouter from "./domain/user/user.routes.mjs";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/", authRouter);
app.use("/", userRouter);

export default app;
