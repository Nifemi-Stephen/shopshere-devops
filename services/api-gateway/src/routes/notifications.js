import { Router } from 'express';
import { notifications } from '../controllers/gatewayController.js';

const router = Router();

router.get('/', notifications);

export default router;