import Director from '../models/director.schema.js';

export const createDirector = async (req, res) => {
    const newDirector = new Director(req.body);
    try {
        await newDirector.save();
        res.status(201).json(newDirector);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}