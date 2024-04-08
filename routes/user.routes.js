import express from "express";
import { createAdmin,signUp,signIn,getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signUp", signUp)
router.post("/createAdmin", createAdmin)
router.post("/signIn", signIn)
router.get("/getUser/:id", getUser)

export default router;