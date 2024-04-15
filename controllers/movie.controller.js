import Movie from '../models/movie.schema.js';
import Director from '../models/director.schema.js';
import Actor from '../models/actor.schema.js';

export const createMovie = async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        await newMovie.save();

        for (const directorId of newMovie.directors) {
            await Director.findByIdAndUpdate(directorId, { $push: { movies: newMovie._id } });
        }

        for (const actorId of newMovie.actors) {
            await Actor.findByIdAndUpdate(actorId, { $push: { movies: newMovie._id } });
        }

        res.status(201).json(newMovie);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}