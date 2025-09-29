import express from "express";
import { profile, updateProfile, getUserById } from "./user.controller.mjs";
import { auth } from "../../middleware/auth.mjs";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();
router.use(auth);
router.get("/profile", profile);
router.put("/update-profile", upload.single("avatar"), updateProfile);
router.get("/user", getUserById);

export default router;
