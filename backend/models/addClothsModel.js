import mongoose from 'mongoose';

const ClothSchema = new mongoose.Schema({
    cloth_name: { type: String, required: true },
    category: { type: String, required: true },
    message: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
});

const Cloth = mongoose.model('Cloth', ClothSchema);
export default Cloth;
