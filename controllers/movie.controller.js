import Movie from '../models/movie.schema.js';

export const createMovie = async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}