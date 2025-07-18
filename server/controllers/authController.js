const userModel = require('../models/user');
const jwt = require('jsonwebtoken');

const login = async (req , res)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:'Email and password are required'});
    }
    const user = await userModel.findOne({email});
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isCorrect = await user.comparePassword(password);
    if(!isCorrect)
    {
        return res.status(401).json({message:'Invalid credentials'});
    }
    const token = jwt.sign({id:user._id} , process.env.JWT_SECRET);
    res.status(200).json({token , message:'Login successful'});
}

const register = async(req , res)=>{
    const {name , email , password} = req.body;
    if(!name || !email || !password)
    {
        return res.status(400).json({message:'Name , email and password are required'});
    }
    const user = await userModel.findOne({email});
    if(user)
    {
        return res.status(400).json({message:'User already exists'});
    }
    const hashPassword = await userModel.hashPassword(password);
    const newUser = await userModel.create({name , email , password:hashPassword});
    res.status(200).json({ message: 'User registered successfully. Please log in.' });
}

module.exports = { login , register};