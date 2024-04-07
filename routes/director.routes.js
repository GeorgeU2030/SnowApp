import express from "express";
import { createDirector } from "../controllers/director.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createDirector",auth, authorize("admin"), createDirector);

export default router;