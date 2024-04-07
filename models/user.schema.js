import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageProfile: { type: String },
    roles: [{ type: String, enum: ['admin', 'user'] }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }]
});

export default mongoose.model('User', userSchema);