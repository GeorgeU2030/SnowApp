import express from "express";
import { createAdmin,signUp,signIn } from "../controllers/user.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/signUp", signUp)
router.post("/createAdmin", createAdmin)
router.post("/signIn", signIn)

export default router;