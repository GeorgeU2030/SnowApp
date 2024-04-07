import Rating from '../models/rating.schema.js';

export const createRating = async (req, res) => {
    const newRating = new Rating(req.body);
    try {
        await newRating.save();
        res.status(201).json(newRating);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

