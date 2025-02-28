import express from 'express';
import { addCloth, getAllCloths, getClothById } from '../controller/clothController.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Fix for ES Module __dirname issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads')); // Ensure correct path
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

// Define routes
router.post('/', upload.single('image'), addCloth);
router.get('/', getAllCloths);
router.get('/:id', getClothById);

export default router;
