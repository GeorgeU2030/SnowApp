import mongoose from 'mongoose';

const directorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    picture: { type: String },
    yearOfBirth: { type: Number },
    country: { type: String },
    oscars: { type: Number },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

export default mongoose.model('Director', directorSchema);