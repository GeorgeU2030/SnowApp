import Director from '../models/director.schema.js';

export const createDirector = async (req, res) => {
    const newDirector = new Director(req.body);
    try {
        await newDirector.save();
        res.status(201).json(newDirector);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.status(200).json(directors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const searchDirector = async (req, res) => {
    try{
        const search= req.query.search;
        const directors = await Director.find({name: {$regex: search, $options: 'i'}});
        res.status(200).json(directors);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}
