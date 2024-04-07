import mongoose from "mongoose"

const actorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    picture: { type: String },
    yearOfBirth: { type: Number },
    country: { type: String },
    oscars: { type: Number },
    nominations: { type: Number },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

export default mongoose.model('Actor', actorSchema);