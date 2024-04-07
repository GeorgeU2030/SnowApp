import User from "../models/user.schema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    const { name, email, password, imageProfile } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, imageProfile, roles: ['user']});
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createAdmin = async (req, res) => {
    const {name, email, password,imageProfile } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, imageProfile, roles: ['admin'] });
    try{
        await newUser.save();
        res.status(201).json({ message: "Admin created successfully" });
    }catch(error){
        res.status(409).json({ message: error.message });
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign({ _id: user._id, role: user.roles}, process.env.TOKEN_SECRET, { expiresIn: "1h" });
    res.header("Authorization", token).json({ message: "Logged in successfully" });
}

  