import Actor from "../models/actor.schema.js";

export const createActor = async (req, res) => {
    const newActor = new Actor(req.body);
    try {
        await newActor.save();
        res.status(201).json(newActor);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}