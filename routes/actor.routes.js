import express from 'express';
import { createActor } from '../controllers/actor.controller.js';
import { auth, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post('/createActor', auth, authorize('admin'), createActor);

export default router;