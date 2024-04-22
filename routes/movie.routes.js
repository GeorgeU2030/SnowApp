import express from "express";
import { createMovie, getRandomMovies, getMovies, getMovie, getAMovie,
voteMovie
} from "../controllers/movie.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createMovie", auth, authorize("admin"), createMovie);
router.get("/getRandomMovies", getRandomMovies);
router.get("/getMovies", auth, getMovies);
router.get("/getMovie/", auth, getMovie);
router.get("/getAMovie/:movieid",auth, getAMovie);
router.post("/vote/:movieid", auth, voteMovie);

export default router;
