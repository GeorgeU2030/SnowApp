import express from "express";
import { createMovie, getRandomMovies, getMovies, getMovie } from "../controllers/movie.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createMovie", auth, authorize("admin"), createMovie);
router.get("/getRandomMovies", getRandomMovies);
router.get("/getMovies", auth, getMovies);
router.get("/getMovie/", auth, getMovie);

export default router;
