import { Router } from 'express';
import { inventory } from '../controllers/gatewayController.js';

const router = Router();

router.get('/', inventory);

export default router;