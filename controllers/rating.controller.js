import Rating from '../models/rating.schema.js';
import Movie from '../models/movie.schema.js';

export const createRating = async (req, res) => {
    const newRating = new Rating(req.body);
    try {
        await newRating.save();
        res.status(201).json(newRating);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getMyRatings = async (req, res) => {
    try {
        const userId = req.params.userId
        const ratings = await Rating.find({ user: userId }).populate('movie');
        res.status(200).json(ratings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateRating = async (req, res) => {
    try {
        const ratingid = req.params.ratingId;
        const newpoints = req.body.points;
        const oldRating = await Rating.findById(ratingid);
        const updatedRating = await Rating.findByIdAndUpdate(ratingid, { points: newpoints }, { new: true });

        if (oldRating && oldRating.movie) {
            const movie = await Movie.findById(oldRating.movie);
            if (movie) {
                movie.points = Math.round((movie.points - oldRating.points + newpoints) / movie.amount);
                await movie.save();
            }
        }

        res.status(200).json(updatedRating);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
