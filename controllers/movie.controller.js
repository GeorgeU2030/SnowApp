import Movie from '../models/movie.schema.js';
import Director from '../models/director.schema.js';
import Actor from '../models/actor.schema.js';
import Rating from '../models/rating.schema.js'

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

export const getRandomMovies = async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 4 } }]);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 5 } }]);
        const populatedMovies = await Movie.populate(movies, [
            { path: 'directors', select: 'name -_id' },
            { path: 'actors', select: 'name -_id' }
        ]);
        res.status(200).json(populatedMovies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getMovie = async (req, res) => {
    try {
        const name= req.query.name;
        const movies = await Movie.find({name: {$regex: name, $options: 'i'}});
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAMovie = async (req, res) => {
    try{
        const id = req.params.movieid
        const movie = await Movie.findById(id);
        res.status(200).json(movie);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const voteMovie = async (req, res) => {
    try{
        const id = req.params.movieid;
        const userId = req.body.userId;
        const points = req.body.points;
        const movie = await Movie.findById(id);
        movie.amount += 1;
        movie.points += points;
        await movie.save();

        const rating = new Rating({
            points: points,
            movie: id,
            user: userId
        })

        await rating.save();

        res.status(200).json(movie);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}