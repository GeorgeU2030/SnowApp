import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    points: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
});

export default mongoose.model('Rating', ratingSchema);