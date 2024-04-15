import express from "express";
import { createMovie, getRandomMovies } from "../controllers/movie.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createMovie", auth, authorize("admin"), createMovie);
router.get("/getRandomMovies", auth, getRandomMovies)

export default router;
