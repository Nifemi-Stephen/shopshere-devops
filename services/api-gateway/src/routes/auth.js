import { Router } from 'express';
import { auth } from '../controllers/gatewayController.js';

const router = Router();

router.get('/', auth);

export default router;