import express from 'express';
import { createNomorAntrianController, getNomorAntrianController } from '../controllers/antriController.js';
import { generatePdfController } from '../controllers/generatePdfController.js';
const router = express.Router();

router.get('/antri', getNomorAntrianController);
router.post('/antri', createNomorAntrianController);
router.get('/generate-pdf', generatePdfController);

export default router;