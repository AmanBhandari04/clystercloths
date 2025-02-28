import Cloth from '../models/addClothsModel.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for ES Module __dirname issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add a new cloth
export const addCloth = async (req, res) => {
    const { cloth_name, category, message, price } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const newCloth = new Cloth({
            cloth_name,
            category,
            message,
            price,
            image: req.file.path, // Ensure the file path is correct
        });

        const result = await newCloth.save();
        res.status(201).json({ message: 'Cloth added successfully!', cloth: result });
    } catch (error) {
        console.error('Error saving cloth:', error);
        res.status(500).json({ message: 'Failed to add cloth.', error });
    }
};

// Get all cloths
export const getAllCloths = async (req, res) => {
    try {
        const cloths = await Cloth.find();
        res.status(200).json(cloths);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cloths', error });
    }
};

// Get a single cloth by ID
export const getClothById = async (req, res) => {
    const { id } = req.params;

    try {
        const cloth = await Cloth.findById(id);
        if (!cloth) {
            return res.status(404).json({ message: 'Cloth not found' });
        }
        res.status(200).json(cloth);
    } catch (error) {
        console.error('Error fetching cloth:', error);
        res.status(500).json({ message: 'Error fetching cloth', error });
    }
};
