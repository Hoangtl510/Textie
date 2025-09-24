import express from "express";
import authRouter from "./domain/auth/auth.routes.mjs";
import "dotenv/config";

const app = express();

// Middleware chung
app.use(express.json());
app.use("/", authRouter);
// Routes
// app.use("/api/auction", auctionRoutes);
// app.use("/api/user", userRoutes);

export default app;
