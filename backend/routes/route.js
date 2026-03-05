import express from 'express';
import { createNomorAntrianController, getDaftarAntrianController, getNomorAntrianController, updateDaftarAntrianController } from '../controllers/antriController.js';
import { generatePdfController } from '../controllers/generatePdfController.js';
const router = express.Router();

router.get('/antri', getNomorAntrianController);
router.post('/antri', createNomorAntrianController);
router.get('/generate-pdf', generatePdfController);
router.get('/daftar-antrian', getDaftarAntrianController);
router.patch('/daftar-antrian', updateDaftarAntrianController);

export default router;