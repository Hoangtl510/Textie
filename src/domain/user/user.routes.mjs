import express from "express";
import { profile, updateProfile, getUserById } from "./user.controller.mjs";

const router = express.Router();

router.get("/profile", profile);
router.put("/update-profile", updateProfile);
router.get("/user", getUserById);

export default router;
