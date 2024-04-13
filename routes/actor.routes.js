import express from 'express';
import { createActor,searchActor } from '../controllers/actor.controller.js';
import { auth, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post('/createActor', auth, authorize('admin'), createActor);
router.get('/searchActor', auth, authorize('admin'), searchActor);

export default router;