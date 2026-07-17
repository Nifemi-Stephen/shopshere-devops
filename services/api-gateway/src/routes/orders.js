import { Router } from 'express';
import { orders } from '../controllers/gatewayController.js';

const router = Router();

router.get('/', orders);

export default router;