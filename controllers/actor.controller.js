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

export const searchActor = async (req, res) => {
    try{
        const search= req.query.search;
        const actors = await Actor.find({name: {$regex: search, $options: 'i'}});
        res.status(200).json(actors);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}