import express from "express";
import { createMovie } from "../controllers/movie.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createMovie", auth, authorize("admin"), createMovie);

export default router;
