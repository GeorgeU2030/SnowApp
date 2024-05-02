import express from "express";
import { createRating, getMyRatings, updateRating, getMovieInRatings } from "../controllers/rating.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createRating", auth, authorize("user"), createRating);
router.get("/getMyRatings/:userId",auth, authorize("user"), getMyRatings);
router.put("/updateRating/:ratingId",auth, authorize("user"), updateRating);
router.get("/getMovieInRatings/:userId",auth, authorize("user"), getMovieInRatings);

export default router;