import express from "express";
import { signUp, signIn, refreshToken } from "./auth.controller.mjs";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/refresh-token", refreshToken);
// router.post("/forgot-password", forgotPassword);

export default router;
