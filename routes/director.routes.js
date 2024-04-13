import express from "express";
import { createDirector,getDirectors,searchDirector } from "../controllers/director.controller.js";
import { auth, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createDirector",auth, authorize("admin"), createDirector);
router.get("/getDirectors",auth, getDirectors);
router.get("/searchDirector",auth, searchDirector);

export default router;