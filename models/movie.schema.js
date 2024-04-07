import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cover: { type: String, required: true },
    year: { type: Number, required: true },
    points: { type: Number, required: true },
    amount: { type: Number, required: true },
    genre: { type: String, required: true },
    oscars: { type: Number, required: true },
    duration: { type: Number, required: true },
    directors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }]
});

export default mongoose.model('Movie', movieSchema);