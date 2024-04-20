import express from "express";
import { createMovie, getRandomMovies, getMovies, getMovie, getAMovie } from "../controllers/movie.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createMovie", auth, authorize("admin"), createMovie);
router.get("/getRandomMovies", getRandomMovies);
router.get("/getMovies", auth, getMovies);
router.get("/getMovie/", auth, getMovie);
router.get("/getAMovie/:id", getAMovie)

export default router;
