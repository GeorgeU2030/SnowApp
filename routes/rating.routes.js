import express from "express";
import { createRating } from "../controllers/rating.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createRating", auth, authorize("user"), createRating);

export default router;