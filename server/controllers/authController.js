const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const existing = await userModel.findOne({ email });
    if (existing) {
        if(!existing.password)
        {
            existing.name = name;
            existing.password = await userModel.hashPassword(password);
            await existing.save();
            return res.status(200).json({message:"Registration successful. Please log in."});
        }
        else{
            return res.status(400).json({message:"User already exists"});
        }
    }

    const hashed = await userModel.hashPassword(password);
    await userModel.create({
      name,
      email,
      password: hashed,
    });

    res
      .status(200)
      .json({ message: "Registration successful. Please log in." });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.googleLogin = async (req, res) => {
    try{
        console.log('Google login request body:', req.body);
        const {name , email , picture , googleId} = req.body;

        if (!email || !googleId) {
            console.log('Missing email or googleId:', { email, googleId });
            return res.status(400).json({ message: "Google login requires email and googleId" });
          }

        const existing = await userModel.findOne({email});
        if(existing)
        {
            if (!existing.googleId) {
                existing.googleId = googleId;
                existing.picture = picture || existing.picture;
                await existing.save();
            }
            const token = jwt.sign({id: existing._id}, process.env.JWT_SECRET);
            res.status(200).json({token, message:"Login successful"});      
        }   
        else{
            const newUser = await userModel.create({name , email , picture , googleId});
            const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET);
            res.status(200).json({token , message:"Login successful"});
        }
    }
    catch(e)
    {
        res.status(500).json({message:"Server error"});
    }
}